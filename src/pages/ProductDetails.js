import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";

const ProductDetails = () => {
  const location = useLocation();
  const params = useParams();

  const [prductInfo, setProductInfo] = useState({});
  console.log(location, "this is locattion");
  console.log(params, "this is params");
  const getProductInfo = async () => {
    try {
      const res = await axios(`https://dummyjson.com/products/${params.id}`);
      if (res.status === 200) {
        setProductInfo(res.data);
      }
    } catch (error) {
      console.log(error, "error");
    }
  };

  useEffect(() => {
    if (params?.id) {
      getProductInfo();
    }
  }, [params.id]);
  return <div>ProductDetails</div>;
};

export default ProductDetails;
