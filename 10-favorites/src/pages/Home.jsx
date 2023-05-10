import { useContext } from "react";
import { Context } from "../context/DataProvider";
import { FaHeart } from "react-icons/fa";

export const Home = () => {
  // useContext is used to grab data from our central data store
  // => the Context
  // using brackets we can pluck out the data we need in this page
  const { books, favs, setFavs } = useContext(Context);

  // FUNCTIONS
  // usually all functions here are triggered by a USER EVENT
  // e.g. typing, clicking

  const addFavorite = (book) => {
    console.log("Adding favorite")

    // make copy of OLD fav list => and add new item to fav list
    const favsNew = [...favs, book];
    setFavs(favsNew);
  };

  const removeFavorite = (book) => {
    console.log("Removing favorite")

    // delete given book from favs
    const favsKeep = favs.filter((fav) => {
      return fav.id !== book.id
    })
    // overwrite favs with new favs (old favs - the deleted fav)
    setFavs(favsKeep)
  }

  const isBookFavorite = (book) => {
    
    // with FIND method we can check if an object is in an array or not
    const itemFound = favs.find( fav => {
      // if this favorite has the same ID as the book we search for => return true      
      return fav.id == book.id
    })
    return itemFound
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
        <FaHeart
        // depending on favorite => set icon color
          color={isBookFavorite(book) ? "red" : "black"}
          // depending on favorite => use different FUNCTION
          // add / remove from favorites
          onClick={() => isBookFavorite(book) ? removeFavorite(book) : addFavorite(book)}
        />
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
