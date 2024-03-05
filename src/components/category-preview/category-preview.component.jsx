import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.component";
import { useNavigate } from "react-router-dom";
const CategoryPreview = ({ title, products }) => {
  const navigate = useNavigate();
  const goto = () => {
    navigate(`/shop/${title}`);
  };
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title" onClick={goto}>
          {title.toUpperCase()}
        </span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => {
            return idx < 4;
          })
          .map((item) => (
            <ProductCard key={item.id} product={item} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
