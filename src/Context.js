import React, { useState, useEffect } from 'react';

const Context = React.createContext();

function ContextProvider({ children }) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const data = async () => {
      const result = await fetch(
        'https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json'
      );
      const photos = await result.json();

      setAllPhotos(photos);
    };

    data();
  }, []);

  const toggleFavorite = (id) => {
    const updateArr = allPhotos.map((photo) => {
      if (photo.id === id) {
        return {
          ...photo,
          isFavorite: !photo.isFavorite,
        };
      }
      return photo;
    });
    setAllPhotos(updateArr);
  };

  const addToCart = (newItem) => {
    setCartItems((prevItems) => [...prevItems, newItem]);
    const localStorageProducts =
      JSON.parse(localStorage.getItem('products')) || [];
    const data = [...localStorageProducts, newItem];
    localStorage.setItem('products', JSON.stringify(data));
  };

  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
    const localStorageProducts =
      JSON.parse(localStorage.getItem('products')) || [];
    const newData = localStorageProducts.filter((element) => element.id !== id);
    localStorage.setItem('products', JSON.stringify(newData));
  };

  const clearCart = () => {
    setCartItems([]);
    localStorage.setItem('products', JSON.stringify([]));
  };

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorite,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </Context.Provider>
  );
}

export { ContextProvider, Context };
