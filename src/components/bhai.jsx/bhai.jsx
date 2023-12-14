import { Shirt } from "../../constants/shirt";

const Menshirt = () => {
  const Item = (props) => {
    return (
      <div className="max-w-sm mx-auto bg-white w-96 ml-10 mt-4 mb-8 flex flex-col items-center gap-4 shadow-lg rounded-lg overflow-hidden justify-evenly">
        <img className=" mt-full w-74 h-64 object-center" src={props.image} />
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {props.name}
        </h2>
        <span className="text-xl font-semibold text-gray-800 mb-2">
          {props.price}
        </span>
        <p className="text-xl font-semibold text-gray-800 mb-2">{props.size}</p>
        <button className="bg-black text-white px-4 py-2 mb-2 rounded w-48">
          Add to Cart
        </button>
      </div>
    );
  };
  return (
    <div>
      <div>
        {/* <h2 className="text-black text-xl font-semibold flex mr-4">Shirts</h2> */}
      </div>

      <div className="flex flex-wrap mx-14 ">
        {Shirt.map((item, id) => {
          return (
            <Item
              key={id}
              id={item.id}
              name={item.name}
              price={item.price}
              size={item.size}
              image={item.imgUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Menshirt;
