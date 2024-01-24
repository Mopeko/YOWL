import React, { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des posts depuis Strapi:", error);
      }
    };

    fetchPosts();
  }, []); 

  return (
    <>
      <Style />
      <div>
        <div className="ul">
          {Array.isArray(posts.data) && posts.data.map((post) => (
            <div key={post.id}>
                <div style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px', backgroundColor: 'black' }}>
                <img src={post.attributes.image} alt={post.attributes.description} style={{ maxWidth: '100%' }} />
                <p>{post.attributes.description}</p>
                <a href={post.attributes.link} target="_blank" rel="noopener noreferrer">
                {post.attributes.link}
                </a>
                </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

const Style = createGlobalStyle`
.ul {
    background-color: black;
    list-style-type: disc;
    margin-block-start: 65px;
    overflow: hidden; 
  }
  
  li {
    max-width: 100%; 
  }

  p{
    color: white;
  }
`;


export default Post;
