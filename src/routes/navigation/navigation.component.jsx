import { Outlet, Link, useActionData } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CronLogo } from "../../assets/crown.svg";
import "./navigation.styles.scss";
import { userContext } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import { SignOutAuth } from "../../utils/firebase/firebase.utils";
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropDown from "../../components/cart-dropdown/cart-dropdown.component";
const Navigation = () => {
  const { currentUser } = useContext(userContext);
  const { isCartOpen } = useContext(CartContext);
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CronLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            Shop
          </Link>
          {currentUser ? (
            <span className="nav-link" onClick={SignOutAuth}>
              Sign Out
            </span>
          ) : (
            <Link className="nav-link" to="/authentication">
              Sign IN
            </Link>
          )}
          <CartIcon />
          {isCartOpen && <CartDropDown />}
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
