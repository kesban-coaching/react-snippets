import { createContext, useState } from "react";

// BOX for all my data
export const Context = createContext();

// PROVIDER of data
// brings all the data from the box to the pages and components
export const DataProvider = ({ children }) => {
  const [books, setBooks] = useState([
    { id: 1, title: "JS for Dummies", author: "Richard Warna" },
    { id: 2, title: "The Notebook", author: "Unknown Author" },
    { id: 3, title: "Bla", author: "Blub Blub" },
  ]);
  // list with fav items
  const [favs, setFavs] = useState([]);

  // whatever we wrap this provider around
  // provide to those components our data
  // with value prop we tell WHAT data to share
  return (
    <Context.Provider value={{ books, favs, setFavs }}>{children}</Context.Provider>
  );
};
