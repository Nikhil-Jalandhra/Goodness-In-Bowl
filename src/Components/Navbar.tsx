import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiBowlOfRice } from "react-icons/gi";

function Navbar() {

    const navLink = [
        { name: 'Home', link: '/', key: "Home" },
        { name: 'About', link: '/about', key: "About" },
        { name: 'Blog', link: '/blog', key: "Blog" },
        { name: 'Recipes', link: '/recipes', key: "Recipes" },
    ];

  return (
      <div className="navContainer">
        <div className="navLogoContainer">
          <Link to="/">
            <div className="logoContainer">
                <h1>GIB</h1>
                <span><GiBowlOfRice /></span>
            </div>
          </Link>
        </div>
            <div className="navLinkBox">
                {navLink.map((item) => (
                    <Link to={item.link} key={item.key}>
                        <li className="navLinkList">{item.name}</li>
                    </Link>
                ))}
            </div>
        <div className="navSeperateLine"></div>
      </div>
  );
}

export default Navbar;
