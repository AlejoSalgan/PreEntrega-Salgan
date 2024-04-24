import React, { useEffect, useState } from "react";
import { products } from "../../../productMock";
import ItemList from "./ItemListPresentacional";
import { useParams } from "react-router-dom";

export const ItemListContainer = () => {
  const { name } = useParams();
  console.log(name);

  const [items, setItems] = useState([]);
  useEffect(() => {
    let filteredProducts = products.filter(
      (product) => product.category === name
    );
    const getProducts = new Promise((resolve, reject) => {
      let variable = true;
      if (variable) {
        resolve(name ? filteredProducts : products);
      } else {
        reject("salio mal");
      }
    });

    getProducts
      .then((res) => setItems(res))
      .catch((error) => {
        console.log(error);
      });
  }, [name]);
  return <ItemList items={items} />;
};

export default ItemListContainer;
