import { useState } from 'react'
import './App.css'
import pizzaImg from './images/pizza.jpeg'

function App() {
 
  // [var, setVar] = useState( default / start wert )
  const [product, setProduct] = useState({
    name: "Hawaii",
    img: "https://source.unsplash.com/100x100?pizza",
    price: 5.99, // 1.2 => 4.8
    rebate: 0.2 // = 20%  | 1 = 100%
  })

  const updatePrice = () => {
    console.log("Updating price...")

    // create copy from data that we want to change
    const productCopy = {
      ...product,
      price: product.price + 1,
    }; 

    // call SETTER to update data and update DOM (re-render)
    setProduct( productCopy )
  }

  // DOM => HTML
  return (
    <div className="App">
      <header className="App-header">
        {/* loads image from PUBLIC FOLDER */}
        <div><img src="./pizza.jpeg" /></div>
        {/* loads image  from SRC folder */}
        <div><img src={pizzaImg} /></div>
        <div>{product.name}</div>
        <div className="price">{product.price}</div>
        {/* RABATT PREIS FORMEL */}
        <div>{((1-product.rebate) * product.price).toFixed(2) }</div>
        <button onClick={updatePrice}>Update price</button>
      </header>
    </div>
  );
}

export default App
