import "./Footer.css"
import { NavLink } from "react-router-dom"
import mainText from "/Images/mainText.png"

function Footer() {

  const navLink = [
    { name: 'Home', link: '/', key: "Home" },
        { name: 'About', link: '/about', key: "About" },
        { name: 'Blog', link: '/blog', key: "Blog" },
        { name: 'Recipes', link: '/recipes', key: "Recipes" },
  ]

  return (
    <div>
      <div className="footerContainer">
        <div className="footerSeperateLine"></div>
        <div className="footerMainText">
            <img src={mainText} alt="Goodness In Bowl" />
        </div>
        <div className="footerLinks">
            {navLink.map((item) => (
              <NavLink 
              to={item.link} 
              key={item.key}
              className={({ isActive }) => (isActive ? 'activeNavLink' : '')}>
                  <li className="navLinkList">{item.name}</li>
              </NavLink>
            ))}
        </div>
        <div className="footerLegal">
          <p>Terms & Conditions</p>
          <p>Licenses</p>
          <p>Cookies</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
