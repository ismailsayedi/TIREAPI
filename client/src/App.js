import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import TireList from './components/TireList';

const App = () => {
  const [token, setToken] = useState(localStorage.getItem('token'));

  return (
    <Router>
      <Routes>
        <Route path="/" element={token ? <TireList token={token} /> : <Login setToken={setToken} />} />
      </Routes>
    </Router>
  );
};

export default App;