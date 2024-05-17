import { useContext, useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import { CartContext } from "../../../context/CartContext";
import { collection, doc, getDoc } from "firebase/firestore";
import { db } from "../../../firebaseConfig";


const ItemDetailContainer = () => {
  const { id } = useParams();
  const { addToCart, getQuantityById } = useContext(CartContext);
  const [item, setItem] = useState({});
  
  let initial = getQuantityById(+id);

  useEffect(() => {
    /*
    let itemEncontrado = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(itemEncontrado);
    });

    getProduct.then((resolve) => setItem(resolve));
    */
    let productsCollection = collection(db, "products")
    let refDoc = doc(productsCollection, id)
    getDoc(refDoc).then(res => {
      setItem({id:res, ...res.data()})
      console.log(res.id)
    }).catch(error => console.log(error))
  }, [id]);

  const onAdd = (cantidad) => {
    let completeObject = { ...item, quantity: cantidad };
    addToCart(completeObject);
  };

  return <ItemDetail item={item} onAdd={onAdd} initial={initial} />;
};
export default ItemDetailContainer;
