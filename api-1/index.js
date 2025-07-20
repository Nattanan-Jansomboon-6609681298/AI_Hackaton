const express = require('express');
const axios = require('axios');
const app = express();
const PORT = 3000;

app.get('/', async (req, res) => {
  console.log('API1: Received request from user');

  try {
    const response = await axios.get('http://api-2:4000/');
    console.log('API1: Got response from API2:', response.data);
    res.send(`This is an answer : ${response.data}`);
  } catch (error) {
    console.error('API1: Error contacting API2:', error.message);
    res.status(500).send('Error contacting API2');
  }
});

app.listen(PORT, () => {
  console.log(`API1 is running on port ${PORT}`);
});
