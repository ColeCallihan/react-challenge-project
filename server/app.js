const express = require('express');
const data = require('./data.json');
const app = express();
const port = 3001;


app.get('/companies', (req, res) => {
  res.send(data);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})