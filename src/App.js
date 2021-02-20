import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { fetchProducts, fetchCart } from "./lib/commerce";
import "./styles.css";
import ProductList from "./components/ProductList";

export default function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});
  const [error, setError] = useState("");

  useEffect(() => {
    fetchCart()
      .then((res) => {
        setCart(res);
      })
      .catch((e) => setError(e.message));
  }, []);

  useEffect(() => {
    fetchProducts()
      .then((res) => setProducts(res.data))
      .catch((e) => setError(e.message));
  }, []);

  console.log(cart);
  console.log(products);
  console.log(error);

  return (
    <div>
      <ProductList cart={cart} product={products}></ProductList>
    </div>
  );
}
