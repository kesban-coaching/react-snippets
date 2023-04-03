import { useState } from "react";
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

  // data to HTML
  const htmlTodos = todos.map((todo) => {
    // map each todo to HTML and return the changed item
    return <div key={todo.id}>{todo.title}</div>;
  });

  // async function => this functions runs in PARALLEL to all other functions in the frontend
  // meaning => even if it takes longer, it can never block any other functions / button clicks
  const onButtonClick = async () => {
    console.log("Hole jetzt die Daten...")

    // fetch data from backend
    const response = await fetch("https://jsonplaceholder.typicode.com/todos")
    // JSON => Javascript Daten 
    const todosApi = await response.json() // JSON function PARSES the body of the received and UNPACKS the JSON data
    console.log(todosApi)

    // place the unpacked todos from the API inside the todos STATE
    // STATE data is the data we display in our UI
    setTodos(todosApi)
  }

  // LAYOUT
  return (
    <div className="App">
      <header className="App-header">
        {htmlTodos}
        {/* CALLBACK => function, die wir erst aufrufen, wenn wir sie brauchen */}

        {/* CONDITIONAL RENDERING => only if there are NO todos => show the button */}
        { todos.length === 0  && <button onClick={onButtonClick}>Hole Daten von Backend</button> }
      </header>
    </div>
  );
}

export default App;
