const express = require('express');
const app = express();
const scraper = require('./scraper');

app.use(express.json());

app.post('/api/v1/books', async(req, res) => {
  const books = await scraper();

  res.send(books);
});

module.exports = app;
