import { BsCart2 } from "react-icons/bs";
import Counter from "./counter/Counter";
import "./cartWidget.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <div>
      <Link to="/carrito">
        <BsCart2 className="carrito" size={28} />
        <Counter />
      </Link>
    </div>
  );
};

export default CartWidget;
