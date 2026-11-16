
import "./FoodCard.css";

function FoodCard({ image, name, description, price, onAdd }) {
  return (
    <div className="food-card">

      <img src={image} alt={name} />

      <div className="food-card-content">

        <h3>{name}</h3>

        <p>{description}</p>

        <div className="food-card-bottom">

          <strong>₦{price.toLocaleString()}</strong>

          <button onClick={onAdd}>
            Add to Cart +
          </button>

        </div>

      </div>

    </div>
  );
}

export default FoodCard;
