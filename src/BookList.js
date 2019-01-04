import React from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

const BookList = (props) => {
  const { books, onAdd } = props;
  return (
    <ol className="books-grid">
    {books.map((book) => (
      <li key={book.id}><Book book={book} onAdd={onAdd} /></li>
    ))}
    </ol>
  )
}

BookList.propTypes = {
  books: PropTypes.array,
  onAdd: PropTypes.func.isRequired
};

export default BookList