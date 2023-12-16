import "./cart.css";
import { FaArrowUp } from "react-icons/fa";
import { FaArrowDown } from "react-icons/fa";
import { useState } from "react";

const cart = ({ cartItems, setCartItems }) => {
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
    const remaining = cartItems.filter((product) => product.id !== id);
    setCartItems(remaining);
  };

  const onAddQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const onMinusQuantity = (id) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  return (
    
    <div className="mad">
      
      <div cart-main>
        <header>
          <h1>Shopping Cart</h1>
        </header>

        <div className="cart-container">
          {cartItems.map((item, index) => (
            <div className="cart-item" key={index}>
              {/* Display item details */}
              <div className="cart-item-details">
                <img src={item.image} alt={item.name} />
                <h2>{item.name}</h2>
                <p>{item.price}</p>
                <p>{item.quantity}</p>
                <p>${calculateItemTotal(item)}</p>

              </div>
              <button className="plus" onClick={() => onAddQuantity(item.id)}>
                +
              </button>
              {item.quantity}
              <button
                className="minus"
                onClick={() => onMinusQuantity(item.id)}
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
            // console.log(item)
          ))}

          <div className="cart-total">
            <p>Total: ${calculateTotalPrice()}</p>
          </div>

          <a href="#" className="checkout-btn">
            Proceed to Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export default cart;
