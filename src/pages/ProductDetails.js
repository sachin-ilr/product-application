import React from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const params = useParams();
  console.log(location, "this is locattion");
  console.log(params, "this is params");

  return <div>ProductDetails</div>;
};

export default ProductDetails;
