import { useEffect, useState } from "../../07-button-fetch-after-seconds/node_modules/@types/react";
import "./App.css";

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
  const [showItems, setShowItems] = useState(true); // true => show items | false => hide items

  // data to HTML
  const htmlTodos = todos.map((todo) => {
    // map each todo to HTML and return the changed item
    return <div key={todo.id}>{todo.title}</div>;
  });

  // useEffect is the last function to run
  // it will run after FIRST RENDER
  useEffect(() => {
    console.log("Use Effect runs (=Page loaded)");
    // DATA fetching function (=> async)
    const fetchDataFromBackend = async () => {
      console.log("Hole jetzt die Daten...");

      // fetch data from backend
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      // JSON => Javascript Daten
      const todosApi = await response.json(); // JSON function PARSES the body of the received and UNPACKS the JSON data
      console.log(todosApi);

      // place the unpacked todos from the API inside the todos STATE
      // STATE data is the data we display in our UI

      setTodos(todosApi);
    };
    // Calling data fetch function
    fetchDataFromBackend();

    // load data after 3 secons
    // setTimeout(() => {
    //   fetchDataFromBackend()
    // }, 3000);
  }, []); // empty array => has the purpose to tell useEffect to just run ONCE at page load

  // async function => this functions runs in PARALLEL to all other functions in the frontend
  // meaning => even if it takes longer, it can never block any other functions / button clicks

  const onItemsVisibilityChange = () => {
    console.log("Change visibility");
    setShowItems(!showItems); // set to false => hide items
  };

  console.log("FIRST RENDER starts....");

  // RENDERING LAYOUT
  return (
    <div className="App">
      <header className="App-header">
        <div>
          {todos.length > 0 && (
            <button onClick={onItemsVisibilityChange}>Show / Hide</button>
          )}
        </div>
        <div className="items-list">{showItems && htmlTodos}</div>
      </header>
    </div>
  );
}

export default App;
