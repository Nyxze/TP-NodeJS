import './App.css';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import Table from "./component/Table";

const URL_API = "http://localhost:3000/user/";
function App() {


// const tbodyData = [
// {
//   id: "1", 
//   items: ["John", "john@email.com", "01/01/2021"]
// }, 
// {
//   id: "2", 
//   items: ["Sally", "sally@email.com", "12/24/2020"]
// },
// {
//   id: "3", 
//   items: ["Maria", "maria@email.com", "12/01/2020"]
// },
// ]

  const [users, setUsers] = useState([])
  const [theadData, setTheadData] = useState([]);

  //Array with keys from json api
  const getUsers = async () => {

    const { data } = await axios.get(URL_API);
    setUsers(data);
    // setTheadData(Object.keys(data[0]));
    setTheadData(Object.keys(data[0]));
    console.log(data);
  };
  useEffect(() => {
    getUsers();
  }, [])
  
  return (
    <div className="App">
      <h1> Yolo </h1>
      <Table theadData={theadData} tbodyData={users}/>
    </div>
  );
}

export default App;
