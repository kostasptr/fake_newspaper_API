import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.scss';
import Home from './components/Home';
import NotFound from './components/NotFound';

function App() {
  return (

    <Router>
      <div className="wrapper">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/fake_newspaper_API/" element={<Home/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>        
      </div>
    </Router>

  );
}

export default App;
