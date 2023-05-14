import { useState } from "react";
import "./App.css";

function App() {
  const [books, setBooks] = useState([
    { id: 1, title: "JS for Dummies", author: "Richard Warna" },
    { id: 2, title: "The Notebook", author: "Unknown Author" },
    { id: 3, title: "Bla", author: "Blub Blub" },
  ]);

  // GENERATE HTML LIST
  const htmlBooks = books.map((book) => {
    return (
      <div className="book" key={book.id} >
        <div>
          <div>{book.title}</div>
          {/* inline style the author */}
          <div style={{ fontSize: 12 }}>{book.author}</div>
        </div>
        {/* delete button with callback */}
        <button onClick={ () => deleteBook(book.id) } >X</button>
      </div>
    );
  });

  // FUNCTIONS
  // usually all functions here are triggered by a USER EVENT
  // e.g. typing, clicking

  // make function DYNAMIC by providng INPUT parameter
  const deleteBook = (idToDelete) => {
    const booksCopy = books.filter(book => {
      // filter out all books except the one we dont want to have
      if (book.id !== idToDelete) {
        return book;
      }
    })

    // pass in the remaining items to the setter
    // the setter will now update the UI with the new array
    setBooks( booksCopy )
  }

  // PAGE LAYOUT
  return (
    <div className="App">
      <header className="App-header">
        <h2>Book List</h2>
        { htmlBooks }
      </header>
    </div>
  );
}

export default App;
