import './App.css';
import axios from 'axios';
import Home from './routes/Home'
import Register from './routes/Register';
import { Routes, Route, Link } from "react-router-dom";
import React, { useState, useEffect } from 'react';


const URL_API = "http://localhost:3000/user/";
function App() {

  const [users, setUsers] = useState([])

  //Array with keys from json api
  const getUsers = async () => {

    const { data } = await axios.get(URL_API);
    setUsers(data);
  };
  useEffect(() => {
    getUsers();
  }, [])

  //   <Routes>
  //   <Route path="home" element={<Table />} />
  // </Routes>
  return (
    <div className="App">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
