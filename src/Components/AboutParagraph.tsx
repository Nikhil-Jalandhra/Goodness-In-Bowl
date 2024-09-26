import "./AboutParagraph.css";
import { Link } from "react-router-dom";

function AboutParagraph() {
  return (
    <div>
        <div className="aboutParagraphContainer">
            <div className="aboutParagraphContent">
                <p className="aboutParagraphContentP">Fresh - Nourish - Flavorful - Seasonal</p>
                <h1>WE ARE EXTREMELY <span>SERIOUS!</span></h1>
                <h1>ABOUT BOWLS</h1>
                <p className="aboutParagraphContentP2">Welcome to <Link to="/"><span>GOODNESS IN BOWL</span></Link>, where we have fun with the artwork of healthful ingesting! Our task is to inspire a love for nutritious, delicious food that nourishes each body and soul. Here, you may discover a curated series of colorful recipes, insightful food pointers, and engaging memories that highlight the splendor of clean elements. Whether you are a pro chef or a curious foodie, our community is all approximately sharing the pleasure of cooking and exploring the flavors of healthy residing. Join us on this delicious journey toward a more conscious and tasty way of life!</p>
            </div>
        </div>
    </div>
  );
}

export default AboutParagraph;
