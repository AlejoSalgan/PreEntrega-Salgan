import { useEffect, useState } from "react";
import { products } from "../../../productMock";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const { id } = useParams();
  console.log(id);

  const [item, setItem] = useState({});
  useEffect(() => {
    let itemEncontrado = products.find((product) => product.id === +id);
    const getProduct = new Promise((resolve, reject) => {
      resolve(itemEncontrado);
    });
    getProduct.then((resolve) => setItem(resolve));
  }, [id]);

  return <ItemDetail item={item}/>;
};
export default ItemDetailContainer;
