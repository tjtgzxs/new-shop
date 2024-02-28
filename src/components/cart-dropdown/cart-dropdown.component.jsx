import "./cart-dropdown.styles.scss";
import Buttion from "../button/button.component";

const CartDropDown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <Buttion>GO TO CHECKOUT</Buttion>
    </div>
  );
};

export default CartDropDown;
