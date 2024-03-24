import { useState } from "react";
import "./Counter.css";
const Counter = () => {
  const [contador, funcionContador] = useState(0);

  const agregarCarrito = () => {
    funcionContador(contador + 1);
  };

  const quitarCarrito = () => {
    contador > 0
      ? funcionContador(contador - 1)
      : alert("No hay productos en el carrito");
  };

  return (
    <div>
      <button onClick={agregarCarrito}>Agregar al carrito</button>
      <button onClick={quitarCarrito}>Quitar del carrito</button>
      <h6>{contador}</h6>
    </div>
  );
};

export default Counter;
