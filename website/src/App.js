import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <nav style={{padding:20, borderBottom:'1px solid #ddd'}}>
        <Link to="/" style={{marginRight:10}}>Home</Link>
        <Link to="/login">Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/login' element={<Login/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
