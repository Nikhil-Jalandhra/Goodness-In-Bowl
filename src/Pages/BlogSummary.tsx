import "./BlogSummary.css";
import blogData from "../database/blog";
import { useParams } from "react-router-dom";

function BlogSummary() {

    const {id} = useParams();
    const blogSummaryData = blogData.find(item => (item.id === Number(id)));

  return (
    <div>
        <div className="blogSummaryContainer">
            <div className="blogSummaryContent">
                <div className="blogSummaryImageContainer">
                    <img src={blogSummaryData?.image1} alt={blogSummaryData?.title1} />
                </div>
                <div className="blogSummaryText">
                    <p>By <span>{blogSummaryData?.author}</span> {blogSummaryData?.date}</p>
                    <h1>{blogSummaryData?.title1}</h1>
                    <p>{blogSummaryData?.description1}</p>
                </div>
                <div className="blogSummaryChildrenImageContainer">
                    <img src={blogSummaryData?.image1} alt={blogSummaryData?.title1} />
                </div>
                <div className="blogSummaryText">
                    <h1>{blogSummaryData?.title2}</h1>
                    <p>{blogSummaryData?.description2}</p>
                </div>
                <div className="blogSummaryChildrenImageContainer">
                    <img src={blogSummaryData?.image1} alt={blogSummaryData?.title1} />
                </div>
                <div className="blogSummaryText">
                    <h1>{blogSummaryData?.title3}</h1>
                    <p>{blogSummaryData?.description3}</p>
                </div>
            </div>
        </div>  
    </div>
  );
}

export default BlogSummary;
