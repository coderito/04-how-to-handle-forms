import React, {useState} from 'react'
import { BookCreate } from './components/BookCreate';

export const App = () => {
  const [book, setBook] = useState([]);

  const createBook = (title) => {
    console.log('Create book ' + title);
  }

  return (
    <div>
      <BookCreate onCreate={createBook}/>
    </div>
  )
}
