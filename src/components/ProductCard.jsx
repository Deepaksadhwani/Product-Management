import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-md shadow-md p-4">
      <h2 className="text-xl font-semibold mb-2">{product.name}</h2>
      <p className="text-gray-700">ID: {product.id}</p>
      <p className="text-gray-700">Price:{product.price + "₹"}</p>
      <p className="text-gray-700">Category: {product.option}</p>
    </div>
  );
};

export default ProductCard;
