import { useState } from "react";
import "./App.css";

function App() {
  // DATA
  const [books, setBooks] = useState([
    { id: "1", favorite: true, title: "Guide to Happiness" },
    { id: "2", favorite: true, title: "Guide to Coding" },
    { id: "3", favorite: false, title: "Guide to Whatever" },
  ]);

  // FILTER states
  const [searchTerm, setSearchTerm] = useState("")
  const [filterFavorites, setFilterFavorites] = useState(false);

  // start with ALL books
  let filteredBooks = books

  // whenever user changed searchTerm or favorites flag => re-do filtering of books
  if(searchTerm || filterFavorites) {
    filteredBooks = books.filter((book) => {
      if (
        // check if search term is included in book title
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
        // check if we just want favorites to get included
        (filterFavorites ? book.favorite === true : true)
      ) {
        // if matching: tell filter to add this book to new array (by returning true)
        return true;
      }
    });
  };
  console.log(filteredBooks)

  // create HTML list of books by converting data to divs
  const htmlBooks = filteredBooks.map((book) => (
    <div key={book.id}>{book.title}</div>
  ));

  return (
    <div className="App">
      <header className="App-header">
        <div className="books-container">
          <div className="search-form">
            <div className="search-input">
              <input
              // when user types => store search term in state for later...
                onChange={(e) => setSearchTerm(e.target.value)}
                type="text"
                placeholder="Enter text here..."
              />
            </div>
            <div className="search-favorite">
              <label>Favorites only:</label>
              {/* when user hits checkbox => store his setting in filterFavorites variable for later.. */}
              <input
                type="checkbox"
                onChange={(e) => setFilterFavorites(e.target.checked)}
              />
            </div>
          </div>
          <div className="book-list">{htmlBooks}</div>
        </div>
      </header>
    </div>
  );
}

export default App;
