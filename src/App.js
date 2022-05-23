import React from 'react';
import './App.css';
import Home from './pages/Home/Home';
import Navbar from './pages/Shared/Header/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <Home/>
    </div>
  );
}

export default App;
