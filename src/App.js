import React, { useState } from "react";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookList";

export const App = () => {
  const [books, setBooks] = useState([]);

  const createBook = (title) => {
    const updateBooks = [
      { id: Math.round(Math.random() * 999), title: title },
      ...books,
    ];
    setBooks(updateBooks);
  };

  const editBookById = (id, title) => {
    const updateBooks = books.map((book) => {
      if (book.id === id) {
        return { ...book, title: title };
      }
      return book;
    });
    setBooks(updateBooks);
  };

  const deleteBookById = (id) => {
    const updatedBooks = books.filter((book) => {
      return book.id !== id;
    });
    setBooks(updatedBooks);
  };

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList books={books} onDelete={deleteBookById} onEdit={editBookById} />
      <BookCreate onCreate={createBook} />
    </div>
  );
};
