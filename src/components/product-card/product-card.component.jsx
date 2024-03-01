import Buttion from "../button/button.component";
import "./product-card.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const addCartHnadler = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={product.imageUrl} alt={product.name} />
      <div className="footer">
        <span className="name">{product.name}</span>
        <span className="price">{product.price}</span>
      </div>
      <Buttion buttonType="inverted" onClick={addCartHnadler}>
        Add To Cart
      </Buttion>
    </div>
  );
};
export default ProductCard;
