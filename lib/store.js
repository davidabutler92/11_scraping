const Book = require('./models/Book');

const store = async(books) => {
  const booksArr = await Promise.all(books.map(book => Book.insert(book)));

  return booksArr;
};

module.exports = store;
