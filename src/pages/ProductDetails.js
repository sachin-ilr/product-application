import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/reducer/products";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const ProductDetails = () => {
  const location = useLocation();
  const params = useParams();
  const dispatch = useDispatch();
  const [productInfo, setProductInfo] = useState({});

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

  const handleAddToCart = () => {
    dispatch(addToCart({ id: productInfo.id, title: productInfo.title, price: productInfo.price }));
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="140"
        image={productInfo.thumbnail}
        alt={productInfo.title}
      />
      <CardContent>
        <Typography variant="h5">{productInfo.title}</Typography>
        <Typography variant="body2" color="text.secondary">
          {productInfo.description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Price: ${productInfo.price}
        </Typography>
        <Button variant="contained" onClick={handleAddToCart}>
          Add to Cart
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductDetails;
