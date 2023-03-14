import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    axios
      .get(`https://fakestoreapi.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
      })
      .catch((err) => console.log(err));
  }, [id]);

  return (
    <div>
      <h2>Product Details</h2>
      <img src={product.image} />
      <h3>Title: {product.title} </h3>
      <p>{product.description} </p>
    </div>
  );
};
export default ProductDetails;
