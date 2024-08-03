import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/reducer/products";
import axios from "axios";
import { Box, Grid, Container } from "@mui/material";

const Home = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const res = await axios("https://dummyjson.com/products");
      if (res.status === 200) {
        dispatch(setProducts(res.data.products));
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.log(error, "error");
    }
  };

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Container maxWidth="xl" sx={{ mt: 4 }}>
      {loading && <Loader />}
      <Grid container spacing={3} justifyContent="center">
        {!!products?.length &&
          !loading &&
          products.map((product) => (
            <Grid item xs={12} sm={6} md={4} lg={3} xl={2.4} key={product.id}>
              <ProductCard {...product} />
            </Grid>
          ))}
      </Grid>
      {products?.length === 0 && !loading && <p>No products found</p>}
    </Container>
  );
};

export default Home;
