import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  // state variable that holds the search of the user
  const [search, setSearch] = useState("")

  const [posts, setPosts] = useState([
    // objects
    { title: "Yadda Yadda", date: "2022-10-01", author: "Rob" },
    { title: "Kesbans Post", date: "2022-10-01", author: "Kesban" },
    { title: "Blubb", date: "2022-10-01", author: "Edward" },
  ]);

  // the map function converts EACH object in the array into a HTML card
  // it fills the data of each object into the card layout
  // 1) it loops over the array
  // 2) it grabs the current object and puts it into the variable "post"
  // 3) it calls a function and puts the post object as input
  // 4) the function "maps" the post object data to a HTML card
  // 5) we can now put the keys from the object into the HTML, where we want to display the info
  // 6) the function returns the generated HTML card
  // 7) then map takes the NEXT object and puts it into the variable post
  // 8) and so on...
  const htmlPostCards = posts.map((post) => {

    // in case we find the user search term in the title of the post 
    // => return the item and convert it to a DIV
    // search by multiple criteria using LOGICAL OR in if
    // if(post.title.includes(search) && post.author.includes(search) ) {
    if(post.title.includes(search) || post.author.includes(search) ) {
      
      return (
        <div key={post.title} className="post-card">
          <h3>{post.title}</h3>
          <div>
            {post.date} by {post.author}
          </div>
        </div>
      );
    }

  });

  // layout
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {/* onChange is triggered by user typing in INPUT field */}
          <input type="text" placeholder="Search..." onChange={(event) => { setSearch(event.target.value) }}  />
        </div>
        <div className="post-cards">
          {/* the generated post cards */}
          {htmlPostCards}
        </div>
      </header>
    </div>
  );
}

export default App;
