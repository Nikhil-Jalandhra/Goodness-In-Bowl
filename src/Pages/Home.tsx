import "./Home.css";
import homeBowl1 from "/Images/homeBowl1.png";
import homeBowl2 from "/Images/homeBowl2.png";
import homeBowl3 from "/Images/homeBowl3.png";
import homeBowl4 from "/Images/homeBowl4.png";
import homeBowl5 from "/Images/homeBowl5.png";
import homeBowl6 from "/Images/homeBowl6.png";
import homeBowl7 from "/Images/homeBowl7.png";
import homeBowl8 from "/Images/homeBowl8.png";
import homeBowl9 from "/Images/homeBowl9.png";
import homeBowl10 from "/Images/homeBowl10.png";
import mainText from "/Images/mainText.png";
import allBlogs from "../database/blog";
import AboutParagraph from "../Components/AboutParagraph";
import BlogCard from "../Components/BlogCard";
import RecipeCard from "../Components/RecipeCard";
import allRecipies from "../database/recipes.ts";
import home1 from "/Images/home1.jpg";
import home2 from "/Images/home2.jpg";
import home3 from "/Images/home3.jpg";
import home4 from "/Images/home4.jpg";
import { SiInstagram } from "react-icons/si";
import { FaFacebookSquare } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { useState, useEffect, useCallback, useMemo } from "react";
import FilterButton from "../Components/FilterButton";

function Home() {

    const allBowl = useMemo(() => [
      homeBowl1,
      homeBowl2,
      homeBowl3,
      homeBowl4,
      homeBowl5,
      homeBowl6,
      homeBowl7,
      homeBowl8,
      homeBowl9,
      homeBowl10,
    ], []); // this is a expensve task of cpu there for I use Use memo Hook that why it is only initialize once
  
    // Wrap getRandomBowlImage in useCallback to stabilize its reference
    const getRandomBowlImage = useCallback(() => {
      return allBowl[Math.floor(Math.random() * allBowl.length)];
    }, [allBowl]); // only when allBowl array will update
  
    const [homeBowlImage, setHomeBowlImage] = useState(getRandomBowlImage());
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        setHomeBowlImage(getRandomBowlImage());
      }, 3000);

      
      return () => clearInterval(intervalId);
    }, [getRandomBowlImage]); // Now it's stable

    const FilterButtonArray = [
      {
        name: "All",
        link: "/recipes"
      },
      {
        name: "Breakfast",
        link: "/recipes/Breakfast"
      },
      {
        name: "Lunch",
        link: "/recipes/Lunch"
      },
      {
        name: "Quick",
        link: "/recipes/Qucik"
      },
    ]

  return (
    <div>
      <div className="homeContainer">
          <div className="homeTextManager">
            <h1>Wholesome Recipes <br /> for Every Occasion</h1>
            <p>Goodness In Bowl, to Warm Your Soul</p>
            <img src={mainText} alt="Goodness In Bowl" />
          </div>
          <div className="homeBowlContainer">
          <img src={homeBowlImage} alt="Bowl" />
          </div>
      </div>

      <div className="displayRecipeFilter">
        {FilterButtonArray.map((item, index) => (
          <FilterButton key={index} item={item}/>
        ))}
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
                item.id <= 4 && <RecipeCard item={item} key={item.id}/>
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
