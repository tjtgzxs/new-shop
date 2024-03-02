import "./checkout-item.styles.scss";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
const CheckoutItem = ({ item }) => {
  const { name, quantity, price, imageUrl } = item;
  const { deleteItemInCart, changeItemQuantity } = useContext(CartContext);
  const deleteHandler = () => deleteItemInCart(item);
  const addHandler = () => changeItemQuantity(item, 1);
  const deduceHandler = () => changeItemQuantity(item, -1);
  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={name} />
      </div>

      <span className="name">{name}</span>
      <span className="quantity">
        <div className="arrow left-arrow" onClick={deduceHandler}>
          &#10094;
        </div>
        {quantity}
        <div className="arrow right-arrow" onClick={addHandler}>
          &#10095;
        </div>
      </span>
      <span className="price">{price}</span>
      <div className="remove-button" onClick={deleteHandler}>
        &#10006;
      </div>
    </div>
  );
};
export default CheckoutItem;
