import React, { useEffect, useState } from "react";
import Card from "../components/ProductCard";
import ProductCard from "../components/ProductCard";
import Loader from "../components/Loader";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState(null);

  const getAllProducts = async () => {
    try {
      setLoading(true);
      const res = await fetch("https://dummyjson.com/products?limit=10");
      console.log(res, "this is reps");
      if (res.status !== 200) {
        throw new Error(" API fetching is failed");
      }
      const productRes = await res.json();
      setProducts(productRes.products);
      setLoading(false);
      console.log(productRes.products, "prodcut response");
    } catch (error) {
      setLoading(false);
      console.log(error, "error");
    }
  };

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
