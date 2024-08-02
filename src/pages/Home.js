import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/reducer/products";
import axios from "axios";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

const Home = () => {
  const products = useSelector((state) => state.products.products);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const res = await axios("https://dummyjson.com/products?limit=10");
      console.log(res, "this is reps");
      if (res.status === 200) {
        // throw new Error(" API fetching is failed");
        console.log(res.data, "prodcut response");
        dispatch(setProducts(res.data.products));
        setLoading(false);
      }
      // const productRes = await res.json();
    } catch (error) {
      setLoading(false);
      console.log(error, "error");
    }
  };
  console.log(products, "productsState");

  useEffect(() => {
    getAllProducts();
  }, []);

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" gutterBottom>
        Home
      </Typography>
      {loading && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Loader />
        </Box>
      )}
      <Grid container spacing={3} justifyContent="center">
        {!!products?.length &&
          !loading &&
          products.map((ele) => (
            <Grid item xs={12} sm={6} md={4} key={ele.id}>
              <ProductCard key={ele.id} {...ele} />
            </Grid>
          ))}
      </Grid>
      {products?.length === 0 && !loading && (
        <Typography variant="h6" color="textSecondary" align="center">
          No products found
        </Typography>
      )}
    </Box>
  );
};

export default Home;
