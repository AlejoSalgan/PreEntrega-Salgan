import React from "react";
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer.jsx";

const App = () => {
  const greeting = "Bienvenido a mi Ecommerce";

  return (
    <div>
      <div>
        <h1>¡Bienvenido a mi aplicación!</h1>
      </div>
      <ItemListContainer greeting={greeting} />
      <NavBar />
    </div>
  );
};

export default App;
