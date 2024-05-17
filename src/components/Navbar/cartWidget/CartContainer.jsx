import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useContext } from "react";
import { CartContext } from "../../../context/CartContext";
import "./CartContainer.css";

const CartContainer = () => {
  const { cart, clearCart, deleteID, getTotalPrice } = useContext(CartContext);
  let total = getTotalPrice();
  return (
    <div className="contenedor">
      este es el carrito;
      <Link to="/checkout">
        <Button variant="contained">Finalizar compra</Button>
      </Link>
      <button onClick={clearCart}>limpiar carrito</button>
      {cart.map((product) => (
        <div>
          <h5 key={product.id}>{product.title}</h5>
          <h5 key={product.id}>{product.quantity}</h5>
          <h5 key={product.id}>{product.price}</h5>
          <button onClick={() => deleteID(product.id)}>Eliminar</button>
        </div>
      ))}
      <h3>El total es: ${total}</h3>
    </div>
  );
};

export default CartContainer;
