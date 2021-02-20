import React from "react";
import ProductCard from "./ProductCard";

export default function ProductList({ products }) {
  return (
    <div>
      {products ? (
        products.map((product) => {
          return <ProductCard key={product.id} product={product} />;
        })
      ) : (
        <ProductCard />
      )}
    </div>
  );
}
