import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const [posts, setPosts] = useState([
    // objects
    { title: "Yadda Yadda", date: "2022-10-01", author: "Rob" },
    { title: "Bla", date: "2022-10-01", author: "Kesban" },
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
    return (
      <div className="post-card">
        <h3>{post.title}</h3>
        <div>
          {post.date} by {post.author}
        </div>
      </div>
    );
  });

  // layout
  return (
    <div className="App">
      <header className="App-header">
        <div className="post-cards">
          {/* the generated post cards */}
          {htmlPostCards}
        </div>
      </header>
    </div>
  );
}

export default App;
