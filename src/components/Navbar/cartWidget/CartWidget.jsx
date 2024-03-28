import { BsCart2 } from "react-icons/bs";
import Counter from "../counter/Counter";

const CartWidget = () => {
  return (
    <div>
      <BsCart2 color="peru" size={25} />
      <Counter />
    </div>
  );
};

export default CartWidget;
