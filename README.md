# MyReads: A Book Tracking App
MyReads is a project from Udacity's React Nanodegree course. This is the web application that allows you to select and categorize books you have read, are currently reading, or want to read.

# App Functionality
In this application, the main page displays a list of "shelves" (i.e. categories), each of which contains a number of books. The three shelves are:

* Currently Reading
* Want to Read
* Read

Each book has a control that lets you select the shelf for that book. When you select a different shelf, the book moves there.

The application search page allows you to find books to add to your library.

The search page has a text input that may be used to find books. As the value of the text input changes, the books that match that query are displayed on the page, along with a control that lets you add the book to your library.

## Important
The search is limited to a particular set of search terms.
            You can find these search terms here:
            https://github.com/jsakowski/myreads-project/blob/master/SEARCH_TERMS.md

# Getting Started

1. run `git clone https://github.com/jsakowski/myreads-project.git` to clone this repository
2. `cd myreads-project` then install all project dependencies with `npm install`
3. start the development server with `npm start`
4. A new browser window should automatically open displaying the app. If it doesn't, navigate to http://localhost:3000/ in your browser
