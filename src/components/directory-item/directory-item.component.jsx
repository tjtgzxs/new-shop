import { useNavigate } from "react-router-dom";
import "./directory-item.style.scss";
const Item = ({ category, id, imageUrl }) => {
  const navigate = useNavigate();
  const goto = () => {
    navigate(`/shop/${category}`);
  };

  return (
    <div key={id} className="directory-container" onClick={goto}>
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      ></div>
      <div className="directory-body-container">
        <h2>{category}</h2>
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default Item;
