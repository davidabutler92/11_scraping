const parse = document => {
  const books = document.querySelectorAll('.product-pod');

  return [...books].map(book => ({
    title: book.querySelector('h3').textContent,
    imgUrl: book.querySelector('.image_container'),
    rating: book.querySelectorAll(''),
    price: book.querySelector('.price_color').textContent,
    inStock: !book.querySelector('.instock availability')
  }));
};



module.exports = parse;

//books title, cover image,
//rating, price, and a boolean indicating if it is in stock.

