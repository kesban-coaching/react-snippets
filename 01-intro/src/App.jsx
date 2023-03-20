import { useState } from 'react';
import './App.css'



function App() {

  const name = "Edward"

  let [price, setPrice] = useState(5.99)

  const hello = (name) => {
    return <div>Hallo {name}</div>;
  }

  // example: 10 => <div>10 EUR</div>
  const showInEuro = (price) => {
    return <div>{price} EUR</div>
  }

  const funky = () => {
    // console.log("Event! Geil!")
    setPrice(10.99)
  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <div>Hallo Edward</div> */}
        <div>
          {/* {hello("Edward")}
          {hello("Kesban")}
          {showInEuro(10)}
          {showInEuro(17)}
          {showInEuro(3.99)} */}
          <div>{price}</div>
          <button onClick={ funky } >Update price</button>
          {/* <input type="number" /> */}
        </div>
      </header>
    </div>
  );
}

export default App
