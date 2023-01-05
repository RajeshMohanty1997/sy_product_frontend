import { useState, useEffect } from "react";
import Product from "./Product";
import AddProduct from "./AddProduct";
import { base_url } from "../services/apiService";
import axios from "axios";

const AllProducts = () => {
  const [products, setProducts] = useState([]);
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    document.title = "All Products";
  }, []);

  //Calling loading product function
  useEffect(() => {
    const getAllProductsFromServer = () => {
      axios
        .get("/products")
        .then((res) => {
          console.log(res);
          setProducts(res.data);
        })
        .catch((err) => {
          console.log(err.response);
        });
    };
    getAllProductsFromServer();
  }, [refresh]);

  const updateProducts = (id) => {
    setProducts(products.filter((c) => c.id !== id));
  };

  return (
    <div>
      <AddProduct setRefresh={setRefresh} />

      <hr />

      <h1>List of products are as follows</h1>

      {products.length > 0
        ? products.map((item, i) => (
            <Product product={item} key={i} update={updateProducts} />
          ))
        : "No Products"}
    </div>
  );
};

export default AllProducts;
