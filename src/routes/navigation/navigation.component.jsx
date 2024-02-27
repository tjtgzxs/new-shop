import { Outlet, Link, useActionData } from "react-router-dom";
import { Fragment, useContext } from "react";
import { ReactComponent as CronLogo } from "../../assets/086 crown.svg";
import "./navigation.styles.scss";
import { userContext } from "../../contexts/user.context";
import { SignOutAuth } from "../../utils/firebase/firebase.utils";
const Navigation = () => {
  const { currentUser } = useContext(userContext);
  // console.log(currentUser);
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
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
