DROP TABLE IF EXISTS books;

CREATE TABLE books (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  title TEXT NOT NULL,
  img_url TEXT NOT NULL,
  rating INT CHECK(rating > 0 AND rating < 6),
  price TEXT NOT NULL,
  in_stock BOOLEAN NOT NULL
)