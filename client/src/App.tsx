import React, { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import PersonList from './Components/PersonList';
import { BasicTable } from './Components/BasicTable'
import { SortingTable } from './Components/SortingTable'
import { FilteringTable } from './Components/FilteringTable';
import { FinalTable } from './Components/FinalTable';

//Retrieve data from localhost:3001/companies using Axioa
//Axios: Promise-based http request API
//Create a table with columns: name, city, state, phone number, products
//Make table sortable by alphabetical order
//Add filters for state and products
//Text search for name, city, or product
//Make it presentable

function App() {
  return (
    <div className="App">
      <FinalTable />
    </div>
  );
}

export default App;

//Testing code

/*
   //get data from API

  const [notes, getNotes] = useState('');
 
  const url = 'http://localhost:3001/';

  useEffect(() => {
    getAllData();
  }, []);

  const getAllData = () => {

    axios.get('${url}')

    .then((response) => {
      const allNotes = response.data;
      getNotes(allNotes);
    })
    .catch(error => console.error('Error: ${error}'));
  }
  //return(<NoteTimeline notes ={notes})

 Old header with logo and how to learn react
 <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>



  //Populate data into the Table


  {data.map((val, key) => {
          return (
          <tr key={key}>
            <td>{val.name}</td>
            <td>{val.age}</td>
            <td>{val.gender}</td>
          </tr>
          )
        })}


  making a person list from a GET axiom request
  <PersonList />
  */