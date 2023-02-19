import React, { useEffect, useState } from "react";

import { useSearchParams } from "react-router-dom";
import { useProducts } from "../../Contexts/ProductContextProvider";
import ProductCard from "./ProductCard";

const ProductList = () => {
  const { getProducts, products, pages } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  function getPagesCount() {
    let pageCountArr = [];

    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }

    return pageCountArr;
  }

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="d-flex justify-content-center flex-wrap">
        {products.map((item) => (
          <ProductCard item={item} key={item.id} />
        ))}
      </div>
      <div>
        <div onClick={() => setCurrentPage(currentPage - 1)} />

        {getPagesCount().map((item) =>
          item === currentPage ? (
            <button onClick={() => setCurrentPage(item)} active key={item}>
              {item}
            </button>
          ) : (
            <button onClick={() => setCurrentPage(item)} key={item}>
              {item}
            </button>
          )
        )}

        <button onClick={() => setCurrentPage(currentPage + 1)} />
      </div>
    </div>
  );
};

export default ProductList;
