import React from 'react';
import NavBar from '../components/navbar';
import TopBar from '../components/topbar';
import PostHome from '../components/postHome';

const Home = () => {
  return (
    <div>
      {/* Contenu de votre application */}
      <PostHome />
      <TopBar />
      <NavBar />
    </div>
  );
};

export default Home;