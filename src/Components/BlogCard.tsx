import "./BlogCard.css";
import { Link } from "react-router-dom";
import { MdOutlineArrowOutward } from "react-icons/md";

function BlogCard({item}) {
  return (
    <div>
       <div className="blogCard">
          <Link to={`/blogSummary/${item.id}/${item.title1}`}>
            <div className="blogImageContainer">
                <div className="blogCategory">{item.date}</div>
                <div className="blogPreview">By {item.author}. <MdOutlineArrowOutward /></div>
                <img src={item?.image1} alt={item?.name} />
            </div>
            <div className="blogDetailContainer">
              <h1>{item.title1}</h1>
              <p>{item.description1.slice(0,160)}...</p>
            </div>
          </Link>
        </div>
    </div>
  );
}

export default BlogCard;
