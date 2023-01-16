import React, { useEffect, useContext } from "react";
import { BookCreate } from "./components/BookCreate";
import { BookList } from "./components/BookList";
import BookContext from "./context/book";

export const App = () => {
  const { fetchBooks } = useContext(BookContext);
 
  useEffect(() => {
    fetchBooks();
  }, []);

  

  return (
    <div className="app">
      <h1>Reading List</h1>
      <BookList />
      <BookCreate />
    </div>
  );
};
