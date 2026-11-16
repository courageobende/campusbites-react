import { useState } from "react";
import FoodCard from "../components/FoodCard";

function Menu({ onAddToCart }) {
  const [searchTerm, setSearchTerm] = useState("");

  const foods = [
    {
      id: 1,
      name: "Classic Beef Burger",
      description: "Juicy beef patty with fresh vegetables and cheese.",
      price: 4500,
      image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600"
    },
    {
      id: 2,
      name: "Pepperoni Pizza",
      description: "Delicious pizza topped with cheese and pepperoni.",
      price: 6500,
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=600"
    },
    {
      id: 3,
      name: "Chicken Shawarma",
      description: "Tasty grilled chicken wrapped with fresh vegetables.",
      price: 3500,
      image: "https://images.unsplash.com/photo-1529006557810-274b9b2fc783?w=600"
    },
    {
      id: 4,
      name: "French Fries",
      description: "Crispy golden fries served fresh and hot.",
      price: 2000,
      image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?w=600"
    }
  ];

  return (
    <div className="popular-section">
      <h1>Our Menu</h1>
      <p>Discover delicious meals made just for you.</p>

      <input
        type="text"
        placeholder="Search for a meal..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
      />

      <div className="food-grid">
        {foods
          .filter((food) =>
            food.name.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((food) => (
            <FoodCard
              key={food.id}
              name={food.name}
              description={food.description}
              price={food.price}
              image={food.image}
              onAdd={() => onAddToCart(food)}
            />
          ))}
      </div>
    </div>
  );
}

export default Menu;