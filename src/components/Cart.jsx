import "./Cart.css";

function Cart({ cart, onRemove }) {
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="cart">
      <h2>My Shopping Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <h3>{item.name}</h3>

              <p>Quantity: {item.quantity}</p>

              <p>Price: ₦{item.price.toLocaleString()}</p>

              <p>Subtotal: ₦{(item.price * item.quantity).toLocaleString()}</p>

              <button onClick={() => onRemove(item.id)}>Remove</button>
            </div>
          ))}

          <h2 className="cart-total">Total: ₦{total.toLocaleString()}</h2>
        </>
      )}
    </div>
  );
}

export default Cart;
