import React from "react";

const ItemListContainer = ({ greeting }) => {
  return (
    <div>
      <h3 style={{ textAlign: "center", color: "peru", margin: 20 }}>
        {greeting}
      </h3>
    </div>
  );
};

export default ItemListContainer;