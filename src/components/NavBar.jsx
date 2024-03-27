import "../styles/NavBar.css";
import CartWidget from "./cartWidget/CartWidget";

const NavBar = () => {
  return (
    <div className="menu">
      <div className="menuItem">
        <a href="#cabañas">Camperas</a>
      </div>
      <div className="menuItem">
        <a href="#minicasas">Sweter</a>
      </div>
      <CartWidget />
    </div>
  );
};
export default NavBar;
