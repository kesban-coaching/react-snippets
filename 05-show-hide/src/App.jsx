import { useState } from "react";
import "./App.css";

/**
 * On first button click => fetch data and show
 * On next button clicks => just hide / show fetched data
 */

function App() {
  // start with DUMMY data in frontend
  // later: we take data from BACKEND instead
  const [todos, setTodos] = useState(
    []
    // { id: 1, title: "Um Nichte und Neffe kümmern" },
    // { id: 2, title: "Volleyball spielen" },
    // { id: 3, title: "Coden wie Profi" },
  );

  // BOOLEAN STATE => SCHALTER / TOGGLE
  const [showItems, setShowItems] = useState(false); // true => show items | false => hide items

  // data to HTML
  const htmlTodos = todos.map((todo,i) => {
    // map each todo to HTML and return the changed item
    return <div key={todo.id}>{i+1}: {todo.title}</div>;
  });

  // async function => this functions runs in PARALLEL to all other functions in the frontend
  // meaning => even if it takes longer, it can never block any other functions / button clicks
  const fetchDataFromBackend = async () => {
    console.log("Hole jetzt die Daten...");

    // fetch data from backend
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    // JSON => Javascript Daten
    const todosApi = await response.json(); // JSON function PARSES the body of the received and UNPACKS the JSON data
    console.log(todosApi);

    // place the unpacked todos from the API inside the todos STATE
    // STATE data is the data we display in our UI
    setTodos(todosApi);
  };

  const onItemsVisibilityChange = () => {

    // if no data fetched so far => fetch the data
    // otherwise => hide / show items
    if(todos.length === 0) {
      fetchDataFromBackend()
    }
 
    console.log("Change visibility");

    // boolean / schalter toggle
    setShowItems(!showItems) // showItems = false => true | showItems = true => false
    // if(showItems === true) {
    //   setShowItems(false); // set to false => hide items
    // }
    // else {
    //   setShowItems(true)
    // }
  };

  // LAYOUT
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <button onClick={onItemsVisibilityChange}>
            {/* toggle label */}
            { showItems ? "Hide" : "Show" }
          </button>
        </div>
        <div className="items-list">{showItems && htmlTodos}</div>
      </header>
    </div>
  );
}

export default App;
