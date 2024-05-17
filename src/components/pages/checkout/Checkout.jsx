import { useContext, useState } from "react";
import "./Checkout.css";
import { TextField, Button } from "@mui/material";
import { CartContext } from "../../../context/CartContext";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../../firebaseConfig";

export const Checkout = () => {
  const { cart, getTotalPrice, clearCart } = useContext(CartContext);
  console.log(cart);

  const [orderId, setOrderId] = useState(null);

  let total = getTotalPrice();

  const [info, setInfo] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const handleChange = (event) => {
    let { name, value } = event.target;
    setInfo({ ...info, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let object = {
      buyer: info,
      items: cart,
      total: total,
    };

    let ordersCollection = collection(db, "orders");
    addDoc(ordersCollection, object)
      .then((res) => setOrderId(res.id))
      .catch((error) => console.log(error));

    cart.forEach((product) => {
      let refDoc = doc(db, "products", product.id);
      updateDoc(refDoc, { stock: product.stock - product.quantity });
    });

    clearCart();
  };

  return (
    <div className="form">
      {orderId ? (
        <h1>ticket: {orderId}</h1>
      ) : (
        <form onSubmit={handleSubmit}>
          <TextField
            type="text"
            label="name"
            onChange={handleChange}
            name="name"
          />
          <TextField
            type="text"
            label="email"
            onChange={handleChange}
            name="email"
          />
          <TextField
            type="text"
            label="phone"
            onChange={handleChange}
            name="phone"
          />
          <Button variant="contained" type="submit">
            enviar
          </Button>
        </form>
      )}
    </div>
  );
};

export default Checkout;
