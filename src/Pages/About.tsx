import "./About.css";
import AboutParagraph from "../Components/AboutParagraph";
import about1 from "/Images/about1.jpg"
import about2 from "/Images/about2.jpg"
import about3 from "/Images/about3.jpg"
import aboutHero from "/Images/aboutHero.jpg";
import aboutCommit from "/Images/aboutCommit.jpg";

function About() {
  return (
    <div>
      <div className="aboutContainer">
        <div className="aboutHeroImg">
          <img src={aboutHero} alt="cafe" />
        </div>
        <AboutParagraph/>
        <div className="aboutImageSection">
            <div className="aboutImageContainer">
              <div className="oneAboutImage">
                  <div className="oneAboutImageCover">LOVE 💝</div>
                  <img src={about1} alt="Dish" />
              </div>
              <div className="twoAboutImage">
                  <div className="twoAboutImageCover">FRESH 🌾</div>
                  <img src={about2} alt="Farm" />
              </div>
              <div className="threeAboutImage">
                    <div className="threeAboutImageCover">CLEAN 🫧</div>
                    <img src={about3} alt="Cooking" />
              </div>
            </div>
        </div>
        <div className="aboutTextSection">
          <div className="aboutTextContainer">
          <p>Join us on this delicious journey toward a more conscious and flavorful lifestyle. Together, we’ll explore the joys of cooking, the importance of mindful eating, and the incredible impact that good food can have on our well-being. Welcome to a community that celebrates health, happiness, and the wonderful world of nutritious food</p>
          </div>
        </div>
        <div>
          <h1>Our commitment to sustainability</h1>
          <div>
            <h1>hlo</h1>
            <p>bilo</p>
          </div>
          <div>
            <h1>hlo</h1>
            <p>bilo</p>
          </div>
          <div>
            <img src={aboutCommit} alt="" />
          </div>
          <div>
            <h1>hlo</h1>
            <p>bilo</p>
          </div>
          <div>
            <h1>hlo</h1>
            <p>bilo</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
