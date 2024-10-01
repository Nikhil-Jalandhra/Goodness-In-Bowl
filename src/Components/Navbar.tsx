import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { GiBowlOfRice } from "react-icons/gi";

function Navbar() {

    const navLink = [
        { name: 'Home', link: '/', },
        { name: 'About', link: '/about', },
        { name: 'Blog', link: '/blog', },
        { name: 'Recipes', link: '/recipes', },
    ];

  return (
      <nav className="navContainer">
        <div className="navLogoContainer">
          <Link to="/">
            <div className="logoContainer">
                <h1>GIB</h1>
                <span><GiBowlOfRice /></span>
            </div>
          </Link>
        </div>
            <ul className="navLinkBox">
              {navLink.map((item) => (
                <NavLink 
                key={item.name}
                to={item.link} 
                className={({ isActive }) => (isActive ? 'activeNavLink' : '')}>
                  <li>{item.name}</li>
                </NavLink>
              ))}
            </ul>
        <div className="navSeperateLine"></div>
      </nav>
  );
}

export default Navbar;
