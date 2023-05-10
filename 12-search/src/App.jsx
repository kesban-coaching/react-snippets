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
  // store the seatch term the user typed into input field
  const [searchTerm, setSearchTerm] = useState("")

  // FUNCTIONS
  const onSearch = () => {
    console.log({ searchTerm })

    // if user has no search term => show all
    // if(searchTerm === "") {
    //   return setFilteredBooks(books)
    // }

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
              <input onChange={ (e) => setSearchTerm(e.target.value) } type="text" placeholder="Enter text here..." />
            </div>
            <button onClick={onSearch}>Search</button>
          </div>
          <div className="book-list">{htmlBooks}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
