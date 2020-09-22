import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../Context';

function Header() {
  const { cartItems } = useContext(Context);
  useEffect(() => {}, [cartItems]);
  const cartItemsLocalStorage =
    JSON.parse(localStorage.getItem('products')) || [];

  const cartEmpty = <i className="ri-shopping-cart-line ri-fw ri-2x"></i>;
  const cartWithItems = (
    <>
      <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
      <span className="badge">{cartItemsLocalStorage.length}</span>
    </>
  );

  return (
    <header>
      <Link to="/">
        <h2>ProductsApp</h2>
      </Link>
      <Link to="/favorites">
        <h2>Favorites</h2>
      </Link>
      <Link to="/cart">
        {cartItemsLocalStorage.length > 0 ? cartWithItems : cartEmpty}
      </Link>
    </header>
  );
}

export default Header;
