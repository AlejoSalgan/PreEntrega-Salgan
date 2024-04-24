import { Link } from "react-router-dom";
import CartWidget from "./cartWidget/CartWidget";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="menu">
      <div>
        <Link to="/">
          <img
            className="logo"
            alt="logo-nike"
            src="https://res.cloudinary.com/dkx9haeh8/image/upload/v1712367544/yfocl9750zg1pf9oujg1.png"
          />
        </Link>
      </div>
      <ul>
        <Link to="/">
          <li>Todas</li>
        </Link>
        <Link to="/category/deportivas">
          <li>Deportivas</li>
        </Link>
        <Link to="/category/urbanas">
          <li>Urbanas</li>
        </Link>
      </ul>
      <CartWidget />
    </div>
  );
};
export default NavBar;
