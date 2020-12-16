const parse = document => {
  const books = document.querySelectorAll('.product_pod');

  return [...books].map(book => ({
    title: book.querySelector('h3').textContent,
    imgUrl: book.querySelector('img').src,
    rating: stringToNumber(book.querySelector('.star-rating').classList.item(1)),
    price: book.querySelector('.price_color').textContent,
    inStock: !book.querySelector('.icon-okay')
  }));
};

const stringToNumber = string => {

  if(string === 'One') {
    return 1;
  } else if(string === 'Two') {
    return 2;
  } else if(string === 'Three') {
    return 3;
  } else if(string === 'Four') {
    return 4;
  } else {
    return 5;
  }
};



module.exports = parse;

//books title, cover image,
//rating, price, and a boolean indicating if it is in stock.
