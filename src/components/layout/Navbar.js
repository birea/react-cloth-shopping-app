import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-fixed">
      <nav className="red">
        <div className="container">
          <Link to="/" className="brand-logo">
            Shopping
          </Link>

          <ul className="right">
            <li>
              <Link to="/articles">Shop</Link>
            </li>
            <li>
              <Link to="/cart">My cart</Link>
            </li>
            <li>
              <Link to="/cart">
                <i className="material-icons">shopping_cart</i>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
