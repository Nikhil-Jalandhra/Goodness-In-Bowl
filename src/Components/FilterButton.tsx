import { Link } from "react-router-dom";
import "./FilterButton.css";

interface buttonDetails {
  item: {
    name: string,
    link: string,
    image: string
  }
}

function FilterButton({item}: buttonDetails) {

    const {name, link, image} =  item;

  return (
    <div className="filterButtonWrap">
  <Link to={link}>
    <div className="filterButtonContainer">
      <div className="filterButtonImage">
        <img src={image} alt={name || "Filter Image"} />
        <p>{name}</p>
      </div>
    </div>
  </Link>
</div>
  );
}

export default FilterButton;
