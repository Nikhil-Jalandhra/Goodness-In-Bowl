import "./NavBar.css"
import { GiBowlOfRice } from "react-icons/gi";
import { Link } from "react-router-dom";

function Navbar() {

    const navLink = [
        { name: 'Home', link: '/', key: "Home" },
        { name: 'About', link: '/about', key: "About Us" },
        { name: 'Blog', link: '/blog', key: "Blog" },
        { name: 'Order', link: '/Order', key: "Order Now" },
    ]

  return (
    <div className="navRoot">
      <div className="navContainer">
        <div className="navLogoContainer">
          <Link to="/">
            <div className="logoContainer">
                <h1>GIB</h1>
                <span><GiBowlOfRice /></span>
            </div>
          </Link>
        </div>
        <div className="navLinkContainer">
            <div className="navLinkBox">
                {navLink.map((item) => (
                    <Link to={item.link} key={item.key}>
                        <li className="navLinkList">{item.name}</li>
                    </Link>
                ))}
            </div>
        </div>
      </div>
      <div className="navSeperateLine"></div>
    </div>
  );
}

export default Navbar;
