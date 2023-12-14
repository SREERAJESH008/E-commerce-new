import "./cart.css";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";

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

   const onRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    console.log(remaining);
    setCart(remaining);
  };

  const addQuantity = (id) => {
    const cartProducts = cart.map((product) => {
      if (product.id === id) {
        console.log(product.quantity + 1);
        return { ...product, quantity: product.quantity + 1 };
      } else {
        return product;
      }
    });
    setCart(cartProducts);
  };
   const minusQuantity = (id) => {
     const cartProducts = cart.map((product) => {
       if (product.id === id && product.quantity !== 1) {
         return { ...product, quantity: product.quantity - 1 };
       } else {
         return product;
       }
     });
     setCart(cartProducts);
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
              <button
                onClick={() => {
                  addQuantity(item.id);
                }}
                className="plus"
              >
                +
              </button>
              {item.quantity}
              <button
                onClick={() => {
                  minusQuantity(item.id);
                }}
                className="minus"
              >
                -
              </button>
              <button onClick={() => onRemoveItem(item.id)} className="btn">
                Remove
              </button>
              {/* <div className="arrow-2">
                <FaArrowDown />
              </div> */}
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