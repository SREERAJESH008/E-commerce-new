import "./shop.css";
import Products from "../../components/index-ids/index";
import ShopProduct from "../index-ids";

const Shop = ({ addToCart }) => {
  const Item = (props) => {
    const handleAddToCart = () => {
      addToCart({
        id: props.id,
        name: props.name,
        price: props.price,
        image: props.image,
        type: props.type,
      });
    };
    return (
      <div className="box">
        {/* <img className="img-1" src={props.imgUrl} alt={props.name} /> */}
        <img className="img-1" src={props.image} alt={props.name} />
        <p className="content-5">{props.name}</p>
        <p className="content-5">{props.weight}</p>
        <p className="content-5">$ {props.price}</p>
        <div className="bottom-5">
          <button className="btn-1" onClick={handleAddToCart}>
            {" "}
            + ADD TO CART
          </button>
        </div>
      </div>
    );
  };
  // console.log(Products)
  return (
    <div className="shop ">
      {ShopProduct.map((item, id) => {
        console.log(item);
        return (
          <Item
            key={id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.imgUrl}
            weight={item.weight}
          />
        );
      })}
    </div>
  );
};


export default Shop;
