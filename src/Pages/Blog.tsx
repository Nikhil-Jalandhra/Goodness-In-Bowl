import "./Blog.css"
import allBlogsData from "../database/blog";
import BlogCard from "../Components/BlogCard";
import { useState, useRef, useEffect } from "react";

function Blog() {

  const [blogHeading, setBlogHeading] = useState("Écrivain Culinaire");
  const headingRef = useRef<HTMLHeadingElement | null>(null);
  
 useEffect(() => {

  const handleMouseEnter = () => {
    setBlogHeading("Foody Blogger")
  }

  const handleMouseLeave = () => {
    setBlogHeading("Écrivain Culinaire")
  }

  const headingElement = headingRef.current;
  headingElement?.addEventListener("mouseenter", handleMouseEnter);
  headingElement?.addEventListener("mouseleave", handleMouseLeave);

  console.log("hl");
  
  
  // return () => {
  //   headingElement?.removeEventListener("mouseenter", handleMouseEnter);
  //   headingElement?.removeEventListener("mouseleave", handleMouseLeave);
  // };

 }, []);

  return (
    <div>
     <div className="blogsContainer">
          <h1 className="blogsPageHeading" ref={headingRef}>{blogHeading}</h1>
          <div className="blogsCardContainer">
            {allBlogsData.map((item, index) => (
              <BlogCard item={item} key={index} />
            ))}
            </div>
        </div>
    </div>
  );
}

export default Blog;
