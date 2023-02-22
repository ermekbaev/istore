import React, { useEffect } from "react";

import { useProducts } from "../../Contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products } = useProducts();
  console.log(products);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap">
        {products.map((item, id) => (
          <ProductCard item={item} key={id} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
