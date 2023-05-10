import { useState } from "react";
import "./App.css";

function App() {
  // DATA
  const [books, setBooks] = useState([
    { id: "1", title: "Guide to Happiness" },
    { id: "2", title: "Guide to Coding" },
    { id: "3", title: "Guide to Whatever" },
  ]);
  const [filteredBooks, setFilteredBooks] = useState(books)

  // FUNCTIONS

  // LIVE search
  // call this function whenever the user types / changes the search terms
  const onSearch = (searchTerm) => {
    console.log({ searchTerm })

    // if user has search term => filter books by search word
    const filteredBooks = books.filter((book) => {
      // check if search term is included in book title
      // if so: tell filter to add this book to new array (by returning true)
      if (book.title.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
    })
    console.log(filteredBooks)
    // update books in UI and just show filtered books
    setFilteredBooks(filteredBooks)
  }

  // create HTML list of books by converting data to divs
  const htmlBooks = filteredBooks.map((book) => <div key={book.id}>{book.title}</div>);

  return (
    <div className="App">
      <header className="App-header">
        <div className="books-container">
          <div className="search-form">
            <div className="search-input">
              <input onChange={ (e) => onSearch(e.target.value) } type="text" placeholder="Enter text here..." />
            </div>
          </div>
          <div className="book-list">{htmlBooks}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
