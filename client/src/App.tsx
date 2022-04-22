import React from 'react';
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

//Access to XMLHttpRequest at 'http://localhost:3001/companies' from origin 'http://localhost:3000' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
//Final error to figure out

//AsyncAwait for promise based

const { useEffect, useState } = React;

function App() {

  const [quote, setQuote] = useState('')
  const [userData, setUserData] = useState('');

  //Using Axios to dynamically grab data
  const getData = () => {
  return axios.get('http://localhost:3001/companies')
    .then(({data}) => {
      //Logging the response
      console.log(data);
      //Using a function to send it to variable "quote"
      return JSON.stringify(data);
    })
    .catch(err => {
      console.error(err);
    })
  }

  useEffect(() => {
    //Mimics componentDidMount() 
    getData().then(userData => {
      setUserData(userData || 'No user data');
    })
  }, []);

  return (
    <div className="App">
      <FinalTable />
      <p>
        {userData}
      </p>
    </div>
  );
}

export default App;