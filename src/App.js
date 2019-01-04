import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'
import './App.css'
import ExpandMyLibrary from './ExpandMyLibrary'
import Bookshelf from './Bookshelf'
import * as BooksAPI from './BooksAPI'
import * as Constants from './constants'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.getMyBooks()
  }

  getMyBooks = () => {
    BooksAPI.getAll()
      .then((mybooks) => {
        this.setState((currentState) => ({
          books: mybooks
        }))
      })
  }

  getBooksForShelf = (shelf) => {
    return this.state.books.filter((book) => book.shelf === shelf)
  }

  changeBookShelf = (book, shelf, result) => {
    if (result[shelf]) {
      // check if book was added to shelf
      let updatedBook = result[shelf].find(bookId => bookId === book.id)

      if (updatedBook) {
        // find book in my books
        let mybook = this.state.books.find(mybook => mybook.id === book.id)

        if (mybook) {
          // update book in my books state
          this.setState({ 
            books: this.state.books.map(b => {
              if (b.id === book.id)
                b.shelf = shelf
              return b
            })
          })
        }
        else {
          // add book to my books
          book.shelf = shelf
          this.setState({ books: this.state.books.concat([book])})
        }
      }
    }
    else {
      // delete book from my books
      this.setState({books: this.state.books.filter(b => b.id !== book.id)})
    }
  }

  onChangeBookShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
      .then((result) => {
        this.changeBookShelf(book, shelf, result)
      })
}

  render() {
    return (
      <div className="app">
        <Route path='/search' render={() => (
          <ExpandMyLibrary mybooks={this.state.books} onAdd={this.onChangeBookShelf} />
        )} />
        <Route exact path='/' render={({ history }) => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                {
                  Constants.bookshelves.map((shelf) =>
                    shelf.id !== 'none' ?
                      <Bookshelf key={shelf.id} books={this.getBooksForShelf(shelf.id)} name={shelf.name} onAdd={this.onChangeBookShelf} />
                      : ''
                  )
                }
              </div>
            </div>
            <div className="open-search">
              <Link to="/search" className='add-book'>Add a book</Link>
            </div>
          </div>
        )} />
      </div>
    )
  }
}

export default BooksApp
