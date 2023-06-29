import { useState } from "react";
import BookList from "../../components/Booklist/BookList";
import { useBooks } from "../../hooks/useBooks";
import BookFilter from "../../components/BookFilter";

function BooksPage() {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Книга 1",
      author: "Автор 1",
      image: "./images/book1.png",
    },
    {
      id: 2,
      title: "Книга 2",
      author: "Автор 2",
      image: "./images/book2.png",
    },
    {
      id: 3,
      title: "Книга 3",
      author: "Автор 3",
      image: "./images/book3.png",
    },
    {
      id: 4,
      title: "Книга 4",
      author: "Автор 4",
      image: "./images/book1.png",
    },
    {
      id: 5,
      title: "Книга 5",
      author: "Автор 5",
      image: "./images/book2.png",
    },
    {
      id: 6,
      title: "Книга 6",
      author: "Автор 1",
      image: "./images/book3.png",
    },
    {
      id: 7,
      title: "Книга 7",
      author: "Автор 2",
      image: "./images/book1.png",
    },
    {
      id: 8,
      title: "Книга 8",
      author: "Автор 3",
      image: "./images/book2.png",
    },
    {
      id: 9,
      title: "Книга 9",
      author: "Автор 4",
      image: "./images/book3.png",
    },
    {
      id: 10,
      title: "Книга 10",
      author: "Автор 5",
      image: "./images/book1.png",
    },
    {
      id: 11,
      title: "Книга 11",
      author: "Автор 1",
      image: "./images/book2.png",
    },
    {
      id: 12,
      title: "Книга 12",
      author: "Автор 2",
      image: "./images/book3.png",
    },
    {
      id: 13,
      title: "Книга 13",
      author: "Автор 3",
      image: "./images/book1.png",
    },
    {
      id: 14,
      title: "Книга 14",
      author: "Автор 4",
      image: "./images/book2.png",
    },
  ]);

  const [filter, setFilter] = useState({ sort: "", query: "" });
  const sortedAndSearchedBooks = useBooks(books, filter.sort, filter.query);

  return (
    <main>
      <BookFilter filter={filter} setFilter={setFilter} />
      <BookList books={sortedAndSearchedBooks} />
    </main>
  );
}

export default BooksPage;
