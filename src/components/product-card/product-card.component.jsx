import Buttion from "../button/button.component";
import "./product-card.styles.scss";
const ProductCard = ({ product }) => {
  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={product.name} />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <Buttion buttonType="inverted">Add To Cart</Buttion>
    </div>
  );
};
export default ProductCard;
