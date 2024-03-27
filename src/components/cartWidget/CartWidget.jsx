import { BsCart2 } from "react-icons/bs";
import Counter from "../counter/Counter";

const Cart = () => {
  return (
    <div>
      <BsCart2 color="peru" size={30} />
      <Counter />
    </div>
  );
};

export default Cart;
