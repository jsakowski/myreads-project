import React from 'react'
import PropTypes from 'prop-types'
import BookList from './BookList'

const Bookshelf = (props) => {
  const { name, books, onAdd } = props;

  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{name}</h2>
      <div className="bookshelf-books">
        <BookList books={books} onAdd={onAdd} />
      </div>
    </div>
  )
}

Bookshelf.propTypes = {
  books: PropTypes.array,
  name: PropTypes.string.isRequired,
};

export default Bookshelf