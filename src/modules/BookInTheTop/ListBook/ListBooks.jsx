import { useEffect, useState } from 'react';
import topBooks from '../../../data/topBook.js';

import { ListBook } from './ListBooks.styled.js';
import { BookItem } from '../BookItem/BookItem.jsx';
export const ListBooks = () => {
  const [sizeWindow, setSizeWindow] = useState(window.innerWidth);
  const [book, setBook] = useState([]);
  const handelWidth = () => {
    setSizeWindow(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener('resize', handelWidth);
    return () => {
      window.removeEventListener('resize', handelWidth);
    };
  }, []);

  useEffect(() => {
    let bookArray = [];

    if (sizeWindow < 1024) {
      bookArray = topBooks.slice(0, 5);
    } else if (sizeWindow > 1023 && sizeWindow < 1439) {
      bookArray = topBooks.slice(0, 5);
    } else {
      bookArray = topBooks.slice(0, 7);
    }
    setBook(bookArray);
  }, [sizeWindow]);
  return (
    <>
      <ListBook>
        {book?.map(({ id, images, title, author, rating }) => (
          <BookItem
            key={id}
            images={images}
            title={title}
            author={author}
            rating={rating}
          />
        ))}
      </ListBook>
    </>
  );
};
