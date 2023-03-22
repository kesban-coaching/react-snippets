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
  const htmlPostCards = posts.map( (post) => {
    return (
      <div className="post-card">
        <h3>{post.title}</h3>
        <div>{post.date} by {post.author}</div>
      </div>
    );
  })

  // layout
  return (
    <div className="App">
      <header className="App-header">
        <div className="post-cards">
          { htmlPostCards }
        </div>
      </header>
    </div>
  );
}

export default App;
