import { useContext } from "react";
import { CartContext } from "../../../../context/CartContext";
import "./Counter.css";
const Counter = () => {
  const { cart, getTotalItems } = useContext(CartContext);
  let total = getTotalItems();

  return (
    <div>
      <h6 className="contador">{total}</h6>
      <div className="burbuja"></div>
    </div>
  );
};

export default Counter;
