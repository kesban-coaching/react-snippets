import { useContext } from "react";
import { Context } from "../context/DataProvider";

export const Home = () => {
  
  // useContext is used to grab data from our central data store
  // => the Context
  // using brackets we can pluck out the data we need in this page
  const { books, favs, setFavs } = useContext(Context)

  // FUNCTIONS
  // usually all functions here are triggered by a USER EVENT
  // e.g. typing, clicking

  const addFavorite = (book) => {
    // make copy of OLD fav list => and add new item to fav list
    const favsNew = [...favs, book];
    setFavs(favsNew);
  };

  // GENERATE HTML LIST
  const htmlBooks = books.map((book) => {
    return (
      <div className="book" key={book.id}>
        <div>
          <div>{book.title}</div>
          {/* inline style the author */}
          <div style={{ fontSize: 12 }}>{book.author}</div>
        </div>
        <button onClick={() => addFavorite(book)}>&#9825;</button>
      </div>
    );
  });

  // PAGE LAYOUT
  return (
    <div>
      <h2>Book List</h2>
      {htmlBooks}
    </div>
  );
};
