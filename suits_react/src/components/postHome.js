import React, { useEffect, useState } from "react";

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
    <div>
      <ul>
        {Array.isArray(posts) && posts.map((post) => (
          <li key={post.id}>
            <p>{post.description}</p>
            <p>{post.link}</p>
            <img src={post.image} alt={post.Description} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Post;