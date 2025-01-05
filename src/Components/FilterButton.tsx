import { Link } from "react-router-dom";
import "./FilterButton.css";

interface buttonDetails {
  item: {
    name: string,
    link: string
  }
}

function FilterButton({item}: buttonDetails) {

    const {name, link} =  item;

  return (
    <div className="filterButtonWrap">
      <Link to={link}>
      <div className="filterButtonContainer">
      <p>{name}</p>  
      </div>
    </Link>
    </div>
  );
}

export default FilterButton;
