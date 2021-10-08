import React from "react";

const CartItem = ({ title, imgFront, description, price, onClick }) => {
  return (
    <li className="collection-item">
      <div className="item-img">
        <img src={imgFront} alt={title} />
      </div>
      <div className="item-info">
        <span className="item-title teal-text">
          <b>{title}</b>
        </span>
        <p className="item-description">{description}</p>
        <p>
          <strong>Price: {price}$</strong>
        </p>
        <button
          className="waves-effect waves-light btn red white-text"
          onClick={onClick}
        >
          Remove
        </button>
      </div>
    </li>
  );
};

export default CartItem;
