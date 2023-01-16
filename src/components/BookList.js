import React from "react";
import useBookContext from "../hooks/use-books-context";
import { BookShow } from "./BookShow";

export const BookList = () => {
  const { books } = useBookContext();

  const renderBooks = books.map((book) => {
    return <BookShow key={book.id} book={book} />;
  });

  return <div className="book-list">{renderBooks}</div>;
};
