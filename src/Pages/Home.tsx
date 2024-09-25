import "./Home.css";
import homeBowl from "/Images/homeBowl.png"
import mainText from "/Images/mainText.png"

function Home() {
  return (
    <div>
      <div className="homeContainer">
        <div className="homeTextContainer">
          <div className="homeTextManager">
            <h1>Wholesome Recipes <br /> for Every Occasion</h1>
            <p>Goodness In Bowl, to Warm Your Soul</p>
            <img src={mainText} alt="" />
          </div>
        </div>
        <div className="homeImageContainer">
          <div className="homeBowlContainer">
            <img src={homeBowl} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
