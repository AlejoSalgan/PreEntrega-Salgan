import { useState } from "react";

const CounterContainer = ({ stock, initial = 1, onAdd }) => {
  const [contador, setContador] = useState(initial);

  const sumar = () => {
    if (contador < stock) {
      setContador(contador + 1);
    }
  };

  const restar = () => {
    if (contador === 0) {
      alert("no podes menos de uno");
    } else {
      setContador(contador - 1);
    }
  };

  return (
    <div>
      <button onClick={restar}>restar</button>
      <h2>{contador}</h2>
      <button onClick={sumar}>sumar</button>
      <button onClick={() => onAdd(contador)}>agregar al carrito</button>
    </div>
  );
};
export default CounterContainer;
