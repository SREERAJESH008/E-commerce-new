import "./cart.css";

const cart = ({ cartItems }) => {
  const calculateItemTotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotalPrice = () => {
    return cartItems.reduce(
      (total, item) => total + calculateItemTotal(item),
      0
    );
  };
  return (
    <div className="mad">
      <div cart-main>
        <header>
          <h1>Shopping Cart</h1>
        </header>

        <div class="cart-container">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              {/* Display item details */}
              <div className="cart-item-details">
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>${calculateItemTotal(item)}</p>
              </div>
              <button>Remove</button>
            </div>
          ))}

          <div class="cart-total">
            <p>Total: ${calculateTotalPrice()}</p>
          </div>

          <a href="#" class="checkout-btn">
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default cart;
