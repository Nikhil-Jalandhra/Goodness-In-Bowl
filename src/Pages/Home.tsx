import "./Home.css";
import homeBowl from "/Images/homeBowl.png";
import mainText from "/Images/mainText.png";
import AboutParagraph from "../Components/AboutParagraph";

function Home() {
  return (
    <div>
      <div className="homeContainer">
          <div className="homeTextManager">
            <h1>Wholesome Recipes <br /> for Every Occasion</h1>
            <p>Goodness In Bowl, to Warm Your Soul</p>
            <img src={mainText} alt="Goodness In Bowl" />
          </div>
          <div className="homeBowlContainer">
            <img src={homeBowl} alt="" />
          </div>
      </div>
          <AboutParagraph/>
    </div>
  );
}

export default Home;
