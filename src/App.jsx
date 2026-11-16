import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Menu from "./pages/Menu";
import Contact from "./pages/Contact";
import Cart from "./components/Cart";

function App() {
  const [cart, setCart] = useState([]);

  function addToCart(food) {
    setCart((previousCart) => {
      const existingFood = previousCart.find((item) => item.id === food.id);

      if (existingFood) {
        return previousCart.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item,
        );
      }

      return [...previousCart, { ...food, quantity: 1 }];
    });
  }

  function removeFromCart(foodId) {
    setCart((previousCart) =>
      previousCart.filter((item) => item.id !== foodId),
    );
  }

  return (
    <BrowserRouter>
      <Navbar cartCount={cart.length} />

      <Routes>
        <Route path="/" element={<Home onAddToCart={addToCart} />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<Menu onAddToCart={addToCart} />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Cart cart={cart} onRemove={removeFromCart} />

      <Footer />
    </BrowserRouter>
  );
}

export default App;
