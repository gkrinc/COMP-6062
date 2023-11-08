const express = require('express');
const app = express();
const port = 5050;

/*
// Middleware - will run on all of our routes, order is important
app.use(express.json()); // for parsing application/json

app.use((req, res, next) => {
  console.log('--- Middleware ---');
  next();
});

app.use((req, res, next) => {
  console.log('Time: %d', Date.now());
  next();
});
*/

app.get('/', (req, res) => {
  // Sends a status code 200 by default
  res.send('Hello World!');
});

app.get('/api', (req, res) => {
  res.send('API route');
});

app.post('/api', (req, res) => {
  console.log(req.body);
  res.status(201).send('API route');
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
