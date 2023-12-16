import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/navbar/nav";
import Slide from "./components/slide/slide";
import Shop from "./components/shop/shop.jsx";
import Login from "./components/login/login.jsx";
import Cart from "./components/cart/cart.jsx";
import Root from "./components/route/root.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Down from "./components/downbar/down.jsx";

function App() {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
    const existingProductIndex = cartItems.findIndex(
      (item) => item.id === product.id
    );

    if (existingProductIndex !== -1) {
      setCartItems((prevItems) =>
        prevItems.map((item, index) =>
          index === existingProductIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        {
          path: "",
          element: <Slide />,
        },
        {
          path: "shop",
          element: <Shop addToCart={addToCart} />,
        },
        {
          path: "login",
          element: <Login />,
        },
        {
          path: "cart",
          element: <Cart cartItems={cartItems} setCartItems={setCartItems}  />,
        },
      ],
    },
  ]);

  return (
    <>
      <div className="baground-img ">
        <RouterProvider router={router} />
      </div>
      <Down />
    </>
  );
}

export default App;
