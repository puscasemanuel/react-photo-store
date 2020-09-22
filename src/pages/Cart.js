import React, { useState, useContext } from 'react';
import { Context } from '../Context';
import CartItem from '../components/CartItem';

function Cart() {
  const { cartItems, setCartItems, clearCart } = useContext(Context);
  const [buttonText, setButtonText] = useState('Place Order');
  const totalCost = 5.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const localStorageProducts =
    JSON.parse(localStorage.getItem('products')) || [];

  const cartItemElements = localStorageProducts.map((item) => {
    return <CartItem item={item} key={item.url} />;
  });

  const orderHandler = () => {
    setButtonText('Ordering...');
    setTimeout(() => {
      console.log('Order placed!');
      setButtonText('Place Order');
      localStorage.removeItem('products');
      setCartItems([]);
    }, 3000);
  };

  return (
    <main className="cart-page" style={{ margin: '0 auto', width: '70%' }}>
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCostDisplay}</p>
      {cartItemElements.length > 0 ? (
        <div className="order-button">
          <button onClick={orderHandler}>{buttonText}</button>
          <button onClick={() => clearCart()}>Clear Cart</button>
        </div>
      ) : (
        <p>You have no items in your cart.</p>
      )}
    </main>
  );
}

export default Cart;
