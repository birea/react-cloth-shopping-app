import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";
import { getArticles, getTotal } from "../../redux/reducers/cartReducer";
import { removeFromCart } from "../../redux/actions/cartActions";
import PayPalButton from "./PayPalButton";

const Cart = ({ articles, total, removeFromCart }) => {
  return (
    <div className="container">
      <h2 className="page-title center grey-text text-darken-2">
        Shopping Cart
      </h2>

      <div className="cart">
        {articles.length > 0 && (
          <ul className="collection">
            {articles.map((article) => (
              <CartItem
                key={article.id}
                {...article}
                onClick={() => removeFromCart(article.id)}
              />
            ))}
          </ul>
        )}
      </div>

      {articles.length === 0 && (
        <div className="collapsible-header red lighten-4 grey-text text-darken-2">
          <i className="material-icons">shopping_cart</i>
          Cart is empty
        </div>
      )}
      <div className="cart-total grey-text text-darken-2">
        <b>Total: {total}$</b>
      </div>

      <div className="checkout">
        <span>
          <PayPalButton />
        </span>
        {/* <button className="waves-effect waves-light btn teal white-text">
          Checkout
        </button> */}
      </div>
    </div>
  );
};

const mapStateToProps = (state, props) => {
  return {
    articles: getArticles(state, props),
    total: getTotal(state, props),
  };
};

const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (id) => dispatch(removeFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
