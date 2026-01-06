import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="nav">
      <h2>IT Академия |Digital Nomad</h2>
      <div>
        <Link to="/">Главная</Link>
        <Link to="/courses">Курсы</Link>
        <Link to="/about">О нас</Link>
      </div>
    </nav>
  );
}

export default Navbar;
