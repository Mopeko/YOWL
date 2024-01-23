import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Post from './pages/post';
import Profil from './pages/profil';
import Search from './pages/search';

const App = () => {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/post" element={<Post />} />
      <Route path="/profil" element={<Profil />} />
      <Route path="/search" element={<Search />} />

      {/* Other routes */}
      </Routes>
    </Router>
  );
};

export default App;