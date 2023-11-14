const express = require('express');
const app = express();
const port = 5001;

// Middleware for parsing req bodies to JSON (req.body)
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/api/volume', (req, res) => {
  res.send('Volume: 10');
});

app.put('/api/volume', (req, res) => {
  res.send(`Volume: ${req.body.volume}`);
});

app.listen(port, () => {
  console.log(`Final project API listening on port ${port}`);
});
