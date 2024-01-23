import React, { useEffect, useState } from "react";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Fonction pour récupérer les posts depuis Strapi
    const fetchPosts = async () => {
      try {
        const response = await fetch("http://localhost:1337/api/posts");
        const data = await response.json();
        setPosts(data);
      } catch (error) {
        console.error("Erreur lors de la récupération des posts depuis Strapi:", error);
      }
    };

    // Appel de la fonction pour récupérer les posts au chargement du composant
    fetchPosts();
  }, []); // Le tableau vide en tant que dépendance assure que l'effet ne se déclenchera qu'une fois au montage du composant

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