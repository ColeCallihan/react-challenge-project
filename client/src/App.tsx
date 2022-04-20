import React, { useState } from 'react';
import axios from 'axios';
import './App.css';
import { FinalTable } from './Components/FinalTable';

//Retrieve data from localhost:3001/companies using Axios
//Axios: Promise-based http request API
//Create a table with columns: name, city, state, phone number, products
//Make table sortable by alphabetical order
//Add filters for state and products
//Text search for name, city, or product
//Make it presentable

function App() {

  const [quote, setQuote] = useState('')
  //Using Axios to dynamically grab data
  const getQuote = () => {
  axios.get('http://localhost:3001/companies')
    .then(response => {
      //Logging the response
      console.log(response);
      //Using a function to send it to variable "quote"
      setQuote(response.data);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <div className="App">
      <FinalTable />
      <button onClick={getQuote}>Grab Data</button>
      { quote && <p>{quote}</p>}
    </div>
  );
}

export default App;