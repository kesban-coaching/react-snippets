import { useState } from "react";
import "./App.css";

function App() {
  // DATA
  const [books, setBooks] = useState([
    { id: "1", title: "Guide to Happiness" },
    { id: "2", title: "Guide to Coding" },
    { id: "3", title: "Guide to Whatever" },
  ]);

  // FUNCTIONS
  const onBookNew = () => {
    console.log("Adding book...");
    const booksCopy = [...books]; // copy the array

    // prepare new item for the list
    const bookNew = { id: "4", title: "Next book of all time" };

    // add item to copied array
    booksCopy.push(bookNew);

    // store the new array in the state
    // this will trigger react to update the HTML
    setBooks(booksCopy);
  }

  // LAYOUT
  return (
    <div className="App">
      <header className="App-header">
        <h2>Add Item to List</h2>
        <div>
          {books.map((book) => (
            <div key={book.id}>{book.title}</div>
          ))}
        </div>
        {/* on click => add a book to list */}
        <button onClick={onBookNew}>Add Book</button>
      </header>
    </div>
  );
}

export default App;
