import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { Context } from '../Context';

const Image = ({ img }) => {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorite, addToCart, cartItems, removeFromCart } = useContext(
    Context
  );

  const heartFill = hovered && (
    <i
      onClick={() => toggleFavorite(img.id)}
      className="ri-heart-fill favorite"
    ></i>
  );
  const heartIcon = hovered && (
    <i
      onClick={() => toggleFavorite(img.id)}
      className="ri-heart-line favorite"
    ></i>
  );

  const cartIcon = () => {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <i
          className="ri-shopping-cart-fill cart"
          onClick={() => removeFromCart(img.id)}
        ></i>
      );
    } else if (hovered) {
      return (
        <i
          className="ri-add-circle-line cart"
          onClick={() => addToCart(img)}
        ></i>
      );
    }
  };
  return (
    <div
      className={`image-container big`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <img alt="GridImages" src={img.url} className="image-grid" />
      {!img.isFavorite ? heartIcon : heartFill}
      {cartIcon()}
    </div>
  );
};

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};

export default Image;
