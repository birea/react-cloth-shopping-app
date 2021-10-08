import React, { Component } from "react";
import { connect } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/actions/cartActions";
import { isInCart } from "../../redux/reducers/cartReducer";
import { Link } from "react-router-dom";

class Article extends Component {
  handleClick = () => {
    const { id, addToCart, removeFromCart, isInCart } = this.props;

    if (isInCart) {
      removeFromCart(id);
    } else {
      addToCart(id);
    }
  };

  render() {
    const { id, title, price, imgFront, isInCart } = this.props;

    return (
      <div className="card">
        <div className="card-image">
          <img className="card-img" src={imgFront} alt={title} />
          <button
            className={
              isInCart
                ? "btn-floating halfway-fab waves-effect waves-light red"
                : "btn-floating halfway-fab waves-effect waves-light teal"
            }
            onClick={this.handleClick}
          >
            {isInCart ? (
              <i className="material-icons">close</i>
            ) : (
              <i className="material-icons">add</i>
            )}
          </button>
        </div>
        <div className="card-content">
          <span className="red-text">
            <b>{title}</b>
          </span>

          <p className="grey-text text-darken-2">
            <b>Price: {price}$</b>
          </p>
        </div>
        <div className="card-action">
          <span>
            <Link className="teal-text" to={"/article/" + id} key={id}>
              See details
            </Link>
          </span>
          <span>
            <Link className="teal-text" to={"/cart"}>
              Go to cart
            </Link>
          </span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    isInCart: isInCart(state, props),
  };
};

const mapDispatchToProps = (dispatch) => ({
  addToCart: (id) => dispatch(addToCart(id)),
  removeFromCart: (id) => dispatch(removeFromCart(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Article);
