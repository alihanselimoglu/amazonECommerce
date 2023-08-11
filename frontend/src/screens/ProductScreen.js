import React from 'react';
import { useParams } from 'react-router-dom';

const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;
  return (
    <div>
      <h1>Product Screen</h1>
      <p>Slug: {slug}</p>
    </div>
  );
};

export default ProductScreen;
