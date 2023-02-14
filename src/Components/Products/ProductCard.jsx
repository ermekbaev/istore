import React, { useState } from "react";
import { useProducts } from "../../Contexts/ProductContextProvider";

const ProductCard = () => {
  const { categories } = useProducts();
  const [category, setCategory] = useState("");
  return (
    <div className=" text-center mx-auto mt-60 border border-black w-96 ">
      <h2 className="">Title</h2>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="choose category">choose category</option>
        {categories.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      <p>item.price</p>
      <p>item.category.title</p>
      <p>item.description</p>
      <p>item.likes</p>
    </div>
  );
};

export default ProductCard;
