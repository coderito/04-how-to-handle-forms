import React, { useContext, useState } from "react";
import useBookContext from "../hooks/use-books-context";


export const BookCreate = () => {
  const [title, setTitle] = useState("");
  const { createBook } = useBookContext;

  const handleChange = (event) => {
    setTitle(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createBook(title);
    setTitle("");
  };

  return (
    <div className="book-create">
      <h3>Add Book</h3>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange} />
        <button className="button">Create!</button>
      </form>
    </div>
  );
};
