import { NavLink, Route, Routes } from "react-router-dom";
import "./App.css";
import { Favorites } from "./pages/Favorites";
import { Home } from "./pages/Home";

function App() {

  // PAGE LAYOUT
  return (
    <div className="App">
      <header>
        <h1>Books Shop</h1>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/favorites">Favorites</NavLink>
        </nav>
      </header>
      <main>
        {/* Route => Page */}
        <Routes>
          {/* homepage */}
          <Route path="/" element={<Home />} />
          {/* favorites page */}
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </main>
      <footer>&copy; Kesban Books unlimited</footer>
    </div>
  );
}

export default App;
