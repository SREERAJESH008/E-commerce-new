import "./shop.css";
import Products from "../../constants/shop.js";

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
        <p className="content-5">{props.type}</p>
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
  return (
    <div className="shop ">
      {Products.map((item, id) => {
        return (
          <Item
            key={id}
            id={item.id}
            name={item.name}
            price={item.price}
            image={item.imgUrl}
            type={item.type}
          />
        );
      })}
    </div>
  );
};

export default Shop;
