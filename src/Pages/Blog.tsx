import "./Blog.css"
import allBlogsData from "../database/blog";
import BlogCard from "../Components/BlogCard";

function Order() {

  

  return (
    <div>
     <div className="blogsContainer">
          <h1 className="blogsPageHeading">Écrivain Culinaire</h1>
          <div className="blogsCardContainer">
            {allBlogsData.map((item, key) => (
              <BlogCard item={item} key={key} />
            ))}
            </div>
        </div>
    </div>
  );
}

export default Order;
