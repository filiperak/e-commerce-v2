import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/views/home/Home";
import Cart from "./components/views/cart/Cart";
import { CategoryContextProvider } from "./context/CategoryContext";

function App() {
  return (
    <div className="App">
      <Router>
        <CategoryContextProvider>
          <Header />
          <Routes>
            <Route path="/cart" element={<Cart />} />
            <Route path="/" element={<Home />} />
          </Routes>
        </CategoryContextProvider>
      </Router>
    </div>
  );
}

export default App;
