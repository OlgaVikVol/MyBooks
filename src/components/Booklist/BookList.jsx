import React from "react";
import style from "./BookList.module.css";

const BookList = ({ books }) => {
  if (!books.length) {
    return <h1 className={style.text}>Книга не найдена</h1>;
  }
  return (
    <div className={style.bookList}>
      {books.map((book) => (
        <div className={style.book} key={book.id}>
          <h3 className={style.bookTitle}>{book.title}</h3>
          <img className={style.bookImage} src={book.image} alt={book.title} />
          <p className={style.bookAuthor}>{book.author}</p>
        </div>
      ))}
    </div>
  );
};

export default BookList;
