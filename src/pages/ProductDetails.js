import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { addToCart } from "../redux/reducer/products";
import {
  Button,
  Typography,
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Box,
} from "@mui/material";
import axios from "axios";

const ProductDetails = () => {
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
    dispatch(addToCart(productInfo));
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Card>
            <CardMedia
              component="img"
              height="400"
              image={productInfo.thumbnail}
              alt={productInfo.title}
              sx={{ objectFit: "contain" }}
            />
          </Card>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box>
            <Typography variant="h4" gutterBottom>
              {productInfo.title}
            </Typography>
            <Typography variant="h6" color="text.secondary" gutterBottom>
              ${productInfo.price}
            </Typography>
            <Typography variant="body1" paragraph>
              {productInfo.description}
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToCart}
              size="large"
            >
              Add to Cart
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ProductDetails;
