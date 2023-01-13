import React from 'react'
import { BookShow } from './BookShow'

export const BookList = ({books, onDelete, onEdit}) => {
  const renderBooks = books.map((book) => {
    return <BookShow onDelete={onDelete} onEdit={onEdit} key={book.id} book={book}/>;
  })

  return (
    <div className='book-list'>{renderBooks}</div>
  )
}
