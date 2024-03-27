import React from "react";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

const App = () => {
  const greeting = "Bienvenido a mi e-commerce";

  return (
    <div>
      <div></div>
      <NavBar />
      <ItemListContainer greeting={greeting} />
    </div>
  );
};

export default App;
