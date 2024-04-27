import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/views/home/Home";
import Cart from "./components/views/cart/Cart";
import { CategoryContextProvider } from "./context/CategoryContext";
import { useState } from "react";

function App() {
  const [searchInput,setSearchInput] = useState('')
  return (
    <div className="App">
      <Router>
        <CategoryContextProvider>
          <Header handleInput={setSearchInput}/>
          <p style={{marginTop:'100px'}}>{searchInput}test</p>

          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home searchInput={searchInput}/>} />
          </Routes>
        </CategoryContextProvider>
      </Router>
    </div>
  );
}

export default App;
