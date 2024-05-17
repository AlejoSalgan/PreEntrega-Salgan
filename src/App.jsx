import React from "react";
import ItemListContainer from "./components/pages/ItemListContainer/ItemListContainer.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from "./components/pages/ItemDetail/ItemDetailContainer.jsx";
import { Layout } from "./layout/Layout.jsx";
import CartContainer from "./components/navbar/cartWidget/CartContainer.jsx";
import Checkout from "./components/pages/checkout/Checkout.jsx";
import CartContextProvider from "./context/CartContext.jsx";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <CartContextProvider >
          <Routes>
            <Route element={<Layout />}>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:name" element={<ItemListContainer />} />
              <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
              <Route path="/carrito" element={<CartContainer />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="*" element={<h1>ERROR</h1>} />
            </Route>
          </Routes>
        </CartContextProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
