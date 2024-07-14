import React, { useEffect, useState } from "react";
import Card from "../components/ProductCard";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/reducer/products";
import axios from "axios";

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
    <div>
      {loading && <Loader />}
      {!!products?.length &&
        !loading &&
        products.map((ele) => <ProductCard key={ele.id} {...ele} />)}
      {products?.length === 0 && !loading && <p>No proucts found</p>}
    </div>
  );
};

export default Home;
