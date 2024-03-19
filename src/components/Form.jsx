import React from "react";
import { useState } from "react";
import ProductCard from "./ProductCard";

const Form = () => {
  const [productId, setProductId] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [productOption, setProductOption] = useState("");
  const [productList, setProductList] = useState([]);

  const productIdHandler = (event) => {
    setProductId(event.target.value);
  };

  const productPriceHandler = (event) => {
    setProductPrice(event.target.value);
  };

  const productNameHandler = (event) => {
    setProductName(event.target.value);
  };

  const productOptionHandler = (event) => {
    setProductOption(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const data = {
      id: productId,
      price: productPrice,
      name: productName,
      option: productOption,
    };
    setProductList([...productList, data]);
    setProductId("");
    setProductName("");
    setProductPrice("");
    setProductOption("");
    console.log(data);
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <form onSubmit={submitHandler} className="space-y-4">
        <div className="flex flex-col">
          <label htmlFor="" className="mb-1">
            Product ID:
          </label>
          <input
            type="number"
            value={productId}
            onChange={productIdHandler}
            className="px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="mb-1">
            Seller Price
          </label>
          <input
            type="number"
            value={productPrice}
            onChange={productPriceHandler}
            className="px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="mb-1">
            Product Name:
          </label>
          <input
            type="text"
            value={productName}
            onChange={productNameHandler}
            className="px-3 py-2 border border-gray-300 rounded-md"
          />
        </div>
        <div className="flex flex-col">
          <label htmlFor="" className="mb-1">
            Product Option:
          </label>
          <select
            value={productOption}
            onChange={productOptionHandler}
            className="px-3 py-2 border border-gray-300 rounded-md"
          >
            <option value="">Please select...</option>
            <option value="Electronic">Electronic</option>
            <option value="Food">Food</option>
            <option value="SkinCare">Skincare</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300"
        >
          Add product
        </button>
      </form>
      <div className="mt-6">
        {productList.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Form;
