import "../styles/NavBar.css";
import Cart from "./cart/Cart";

const NavBar = () => {
  return (
    <div className="menu">
      <div className="menuItem">
        <a href="#cabañas">Camperas</a>
      </div>
      <div className="menuItem">
        <a href="#minicasas">Sweter</a>
      </div>
      <Cart />
    </div>
  );
};
export default NavBar;
