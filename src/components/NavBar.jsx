import "../styles/NavBar.css";

const NavBar = () => {
  return (
    <div className="menu">
      <div className="menuItem">
        <a href="#inicio">Inicio</a>
      </div>
      <div className="menuItem">
        <a href="#producto">Productos</a>
      </div>
      <div className="menuItem">
        <a href="#contacto">Contacto</a>
      </div>
      <div className="menuItem">
        <a href="#buscar">Buscar</a>
        <input type="text" />
      </div>
    </div>
  );
};
export default NavBar;
