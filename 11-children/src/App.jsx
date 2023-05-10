import "./App.css";

// passing props to a component
// to make it more custom => we can change the styling e.g. 
const KesbanButton = ({ color = "red", children = "Kesban" }) => {
  return (
    <button style={{ color: color, textTransform: "uppercase" }}>
      {children}
    </button>
  );
  // return <button style={{ color: props.color }}>{props.children}</button>
  // return <button style={{ color: props.color }}>{props.text}</button>
};

// props
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>Children</h2>
        <KesbanButton>Btn 1</KesbanButton>
        <KesbanButton>Btn 2</KesbanButton>
        <KesbanButton color="green">Btn 3</KesbanButton>
      </header>
    </div>
  );
}

export default App;
