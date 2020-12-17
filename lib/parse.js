const parse = document => {
  const books = document.querySelectorAll('.product_pod');

  return [...books].map(book => ({
    title: book.querySelector('h3').title,
    imgUrl: book.querySelector('img').src,
    rating: ratingNumber(book.querySelector('.star-rating').classList.item(1)),
    price: book.querySelector('.price_color').textContent,
    inStock: !book.querySelector('.icon-okay')
  }));
};

const ratingNumber = str => {
  const table = {
    'One': 1,
    'Two': 2,
    'Three': 3,
    'Four': 4,
    'Five': 5
  };

  return table[str];
};

module.exports = parse;

//books title, cover image,
//rating, price, and a boolean indicating if it is in stock.
