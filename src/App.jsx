import React from "react";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer.jsx";
import { Layout } from "./layout/Layout.jsx";
import CartContainer from "./components/navbar/cartWidget/CartContainer.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<ItemListContainer />} />
            <Route path="/category/:name" element={<ItemListContainer />} />
            <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
            <Route path="/carrito" element={<CartContainer />} />
            <Route path="*" element={<h1>ERROR</h1>} />
          </Route>
        </Routes>
        <ItemListContainer />
      </BrowserRouter>
    </div>
  );
};

export default App;
