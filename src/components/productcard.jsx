import React from 'react';
import ViewButton from './button';

const ProductCard = () => {
  const productImage = "https://img.tatacliq.com/images/i20//658Wx734H/MP000000023788321_658Wx734H_202409222239111.jpeg";
  const productName = "Titan Explorer";
  const productPrice = "₹82,499";

  return (
    <div>
      <img src={productImage}/>
      <p>{productName}</p>
      <p>{productPrice}</p>
      <ViewButton />
    </div>
  );
};

export default ProductCard;