import { useState } from "react";
import "./Home.css";
import FoodCard from "../components/FoodCard";

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

function Home({ onAddToCart }) {
    const [searchTerm, setSearchTerm] = useState("");
    const filteredFoods = foods.filter((food) =>
        food.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
  return (
    <div className="home">

      <section className="hero">

        <div className="hero-content">

          <p className="hero-tag">
            FRESH FOOD, HAPPY STUDENTS
          </p>

          <h1>
            Delicious Meals,
            <span> Delivered To You.</span>
          </h1>

          <p className="hero-description">
            Hungry? CampusBites brings your favourite
            meals closer to you. Enjoy delicious food,
            affordable prices and convenient delivery
            right to your doorstep.
          </p>

          <div className="hero-buttons">
            <button className="explore-button">
              Explore Menu →
            </button>

            <button className="learn-button">
              Learn More
            </button>
          </div>

          <div className="hero-stats">
            <div>
              <h3>50+</h3>
              <p>Food Options</p>
            </div>

            <div>
              <h3>Fast</h3>
              <p>Delivery</p>
            </div>

            <div>
              <h3>100%</h3>
              <p>Fresh Meals</p>
            </div>
          </div>

        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900"
            alt="Delicious burger"
          />

          <div className="image-label">
            <span>🔥</span>
            <div>
              <strong>Fresh & Delicious</strong>
              <p>Made with love</p>
            </div>
          </div>
        </div>

      </section>

      <section className="popular-section">
      <input
  type="text"
  placeholder="Search for your favourite meal..."
  value={searchTerm}
  onChange={(event) => setSearchTerm(event.target.value)}
/>

        <p className="section-tag">OUR MENU</p>

        <h2>Explore Our Popular Meals</h2>

        <p>
          Delicious meals prepared to satisfy your cravings.
        </p>

        <div className="food-grid">

        {filteredFoods.length === 0 && (
  <p>No meals found. Try another search.</p>
)}
          {filteredFoods.map((food) => (
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

      </section>

    </div>
  );
}

export default Home;
