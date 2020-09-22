import React, { useContext } from 'react';
import Image from '../components/Image';
import { Context } from '../Context';

const Favorites = () => {
  const { allPhotos } = useContext(Context);

  const favoritePhotos = allPhotos.filter((el) => el.isFavorite !== false);

  const displayFavorites = favoritePhotos.map((el) => {
    return <Image key={el.id} img={el} />;
  });

  return (
    <div style={{ margin: '0 auto', width: '70%' }}>
      {displayFavorites.length > 0 ? (
        <>
          <h1>Favorite Products</h1>
          <main className="photos">{displayFavorites}</main>
        </>
      ) : (
        <h1 style={{ textAlign: 'center' }}>
          You don't have favorite products yet!
        </h1>
      )}
    </div>
  );
};
export default Favorites;
