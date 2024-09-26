import "./About.css";
import AboutParagraph from "../Components/AboutParagraph";
import about1 from "/Images/about1.jpg"
import about2 from "/Images/about2.jpg"
import about3 from "/Images/about3.jpg"

function About() {
  return (
    <div>
      <div className="aboutContainer">
        <AboutParagraph/>
        <div className="aboutImageSection">
            <div className="aboutImageContainer">
              <div className="oneAboutImage"><img src={about1} alt="Dish" /></div>
              <div className="twoAboutImage"><img src={about2} alt="Farm" /></div>
              <div className="threeAboutImage"><img src={about3} alt="Cooking" /></div>
            </div>
        </div>
        <div className="aboutTextSection">
          <div className="aboutTextContainer">
          <p>Join us on this delicious journey toward a more conscious and flavorful lifestyle. Together, we’ll explore the joys of cooking, the importance of mindful eating, and the incredible impact that good food can have on our well-being. Welcome to a community that celebrates health, happiness, and the wonderful world of nutritious food</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
