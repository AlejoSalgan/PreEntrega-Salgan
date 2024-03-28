import CartWidget from "./cartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="menu">
      <div className="menuItem">
        <a href="#cabañas">Camperas</a>
      </div>
      <div className="menuItem">
        <a href="#minicasas">Remeras</a>
      </div>
      <div className="menuItem">
        <a href="#minicasas">Sweater</a>
      </div>
      <div className="menuItem">
        <a href="#minicasas">Pantalones</a>
      </div>
      <CartWidget />
    </div>
  );
};
export default NavBar;
