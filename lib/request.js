const fetch = require('node-fetch');
const { JSDOM } = require('jsdom');
const pool = require('./utils/pool');
const fs = require('fs');

pool.query(fs.readFileSync('./sql/setup.sql', 'utf-8'));

const request = async() => {
  const response = await fetch('http://books.toscrape.com/');
  const html = await response.text();
  const dom = new JSDOM(html);

  return dom.window.document;
};

module.exports = request;
