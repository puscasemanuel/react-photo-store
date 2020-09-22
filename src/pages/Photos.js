import React, { useContext } from 'react';
import Image from '../components/Image';
import { Context } from '../Context';

function Photos() {
  const { allPhotos } = useContext(Context);

  const result = allPhotos.map((el, id) => {
    return <Image key={el.id} img={el} />;
  });

  return <main className="photos">{result}</main>;
}

export default Photos;
