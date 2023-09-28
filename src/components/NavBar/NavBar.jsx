import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <h1>Retro Video Games E-Shop</h1>
      <Link to="/">View Games</Link>
      <Link to="/cart">View Cart</Link>
    </nav>
  );
};

export default NavBar;
