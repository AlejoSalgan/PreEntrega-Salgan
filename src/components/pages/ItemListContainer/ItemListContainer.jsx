import React, { useEffect, useState } from "react";
import ItemList from "./ItemListPresentacional";
import { useParams } from "react-router-dom";
import { db } from "../../../firebaseConfig";
import { collection, getDocs, query, where } from "firebase/firestore";

export const ItemListContainer = () => {
  const { name } = useParams();
  const [items, setItems] = useState([]);
  useEffect(() => {
    /*
    const productCollection = collection(db, "products");
    getDocs(productCollection).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(newArray)
    
    });
    */
    /*
    const productCollection = collection(db, "products");
    let consulta = query(productCollection, where("category", "==", name));
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(newArray);
    });
    */
    const productCollection = collection(db, "products");
    let consulta = productCollection;
    if (name) {
      consulta = query(productCollection, where("category", "==", name));
    }
    getDocs(consulta).then((res) => {
      let newArray = res.docs.map((doc) => {
        return { id: doc.id, ...doc.data() };
      });
      setItems(newArray);
    });
  }, [name]);
/*
  
*/
  return <ItemList items={items} />;
};

export default ItemListContainer;
