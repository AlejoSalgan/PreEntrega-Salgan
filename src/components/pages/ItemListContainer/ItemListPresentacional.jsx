import React from "react";
import ProductCard from "../../common/productCard/productCard";
import "./ItemList.css";

const ItemListPresentacional = ({ items }) => {

  return (
    <div>
      <div>
        {items.map((item) => {
          return (
            <div className="items">
              <ProductCard
                key={item.id}
                title={item.title}
                category={item.category}
                price={item.price}
                img={item.img}
                id={item.id}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ItemListPresentacional;
