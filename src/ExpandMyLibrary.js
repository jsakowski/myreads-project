import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookList from './BookList'

class ExpandMyLibrary extends Component {
  state = {
    query: '',
    books: []
  }

  onFilterTextChange = (query) => {
    this.setState({
      query: query
    }, () => {
      this.updateBookList(this.state.query)
    })
  }

  updateBookList = (searchText) => {
    if (searchText && searchText.trim() !== '')
      this.findBooks(searchText);
    else
      this.setState(() => ({
        books: []
      }))
  }

  findBooks = (query) => {
    BooksAPI.search(query).then((response) => {
      this.setState(() => ({
        books: Array.isArray(response) ? response : []
      }))
    })
  }

  render() {
    const { query, books } = this.state
    const {mybooks, onAdd} = this.props

    const bookList = books.map((book) => {
      const bookOnShelf = mybooks.filter((mybook) => mybook.id === book.id);
      book.shelf = bookOnShelf.length > 0 ? bookOnShelf[0].shelf : 'none';
      return book;
    })

    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className='close-search'>Close</Link>
          <div className="search-books-input-wrapper">
            {/*
            NOTES: The search from BooksAPI is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
            you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              placeholder="Search by title or author"
              value={query}
              onChange={(event) => this.onFilterTextChange(event.target.value)}/>

          </div>
        </div>
        <div className="search-books-results">
          <BookList books={bookList} onAdd={onAdd} />
        </div>
      </div>
    )
  }
}

export default ExpandMyLibrary
