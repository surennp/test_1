import React from 'react';
import './App.css';
import NavBar from './components/NavBar';
import HeroSection from './components/HeroSection';
import Home from './components/pages/Home';
import { BrowserRouter, Routes,Link, Route } from 'react-router-dom';
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" exact component={Home} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
