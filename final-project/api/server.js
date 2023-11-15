const express = require('express');
const fs = require('fs');
const app = express();
const port = 5001;

// Middleware for parsing req bodies to JSON (req.body)
app.use(express.json());

app.get('/api/volume', (req, res) => {
  return fs.readFile('data.json', (err, data) => {
    const json = JSON.parse(data);
    res.send({ volume: json.volume });
  });
});

app.put('/api/volume', (req, res) => {
  return fs.readFile('data.json', (err, data) => {
    const json = JSON.parse(data);
    json.volume = Number(req.body.volume);
    fs.writeFile('data.json', JSON.stringify(json), () => {
      res.send({ volume: Number(req.body.volume) });
    });
  });
});

// Path params
app.get('/api/songs/:id', (req, res) => {
  res.send(req.params.id);
});

app.listen(port, () => {
  console.log(`Final project API listening on port ${port}`);
});
