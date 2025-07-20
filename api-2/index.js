const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  console.log('API2: Received request from API1');
  res.send('Hello from API2');
});

app.listen(PORT, () => {
  console.log(`API2 is running on port ${PORT}`);
});
