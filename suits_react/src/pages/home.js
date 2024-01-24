import React from 'react';
import NavBar from '../components/navBar';
import TopBar from '../components/topBar';
import PostHome from '../components/postHome';

const Home = () => {
  return (
    <div>
      {/* Contenu de votre application */}
      <TopBar />
      <PostHome />
      <NavBar />
    </div>
  );
};

export default Home;