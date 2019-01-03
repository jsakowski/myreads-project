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
    BooksAPI.getAll()
      .then((mybooks) => {
        console.log(mybooks);
        this.setState((currentState) => ({
          books: mybooks
        }))
      })
      .catch(err => console.log('There was an error:' + err))
  }

  getBooksForShelf(shelf) {
    return this.state.books.filter((book) => book.shelf === shelf)
  }

  render() {

    return (
      <div className="app">
        <Route path='/search' render={() => (
          <ExpandMyLibrary mybooks={this.state.books} />
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
                      <Bookshelf key={shelf.id} books={this.getBooksForShelf(shelf.id)} name={shelf.name} />
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
