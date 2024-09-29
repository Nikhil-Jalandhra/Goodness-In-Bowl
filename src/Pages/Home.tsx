import "./Home.css";
import homeBowl from "/Images/homeBowl.png";
import mainText from "/Images/mainText.png";
import allBlogs from "../database/blog";
import AboutParagraph from "../Components/AboutParagraph";
import BlogCard from "../Components/BlogCard";
import RecipeCard from "../Components/RecipeCard";
import allRecipies from "../database/recipes";
import home1 from "/Images/home1.jpg";
import home2 from "/Images/home2.jpg";
import home3 from "/Images/home3.jpg";
import home4 from "/Images/home4.jpg";
import { SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";

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
            <img src={homeBowl} alt={homeBowl} />
          </div>
      </div>
          <AboutParagraph/>
          <div className="homeBlogDisplay">
            <h1 className="homeBlogHeading">Our Blogs</h1>
            <div className="homeBlogCardDisplay">
              {allBlogs.map((item) => (
                item.id <= 3 && <BlogCard item={item} key={item.id}/>
              ))}
            </div>
          </div>
          <div className="homeRecipeDisplay">
            <h1 className="homeRecipeHeading">Our Recipes</h1>
            <div className="homeRecipeCardDisplay">
              {allRecipies.map((item) => (
                item.id <= 3 && <RecipeCard item={item} key={item.id}/>
              ))}
            </div>
          </div>

          <div className="homeImageGrid">
            <div className="homeImageGridHeading">
              <h1>Find us on:</h1>
              <div className="socialIcon">
                <p><SiInstagram /></p>
                <p><FaFacebookSquare /></p>
                <p><TfiYoutube /></p>
              </div>
            </div>
            <div className="homeImageGridContainer">
              <img className="home1" src={home1} alt="home1" />
              <img className="home2" src={home2} alt="home2" />
              <img className="home3" src={home3} alt="home3" />
              <img className="home4" src={home4} alt="home42" />
            </div>
          </div>
    </div>
  );
}

export default Home;
