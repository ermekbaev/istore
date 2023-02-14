import React, { useEffect, useState } from "react";
import { useProducts } from "../../Contexts/ProductContextProvider";

const AddProduct = () => {
  const { getCategories, categories, createProduct } = useProducts();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  useEffect(() => {
    getCategories();
  }, []);
  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("image", image);
    createProduct(newProduct);
  }
  return (
    <div className="mt-6 m-auto max-w-md text-center pb-12 ">
      <div>
        <label className="text-3xl text-center border-2 border-zinc-900 rounded-full">
          Add product
        </label>
      </div>
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="choose category">choose category</option>
        {categories.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      <div className="w-96">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="text-center w-96 m-0.5 border-2 border-zinc-900 rounded-full"
          type="text"
          placeholder="title"
        />
        <input
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="text-center w-96 m-0.5 border-2 border-zinc-900 rounded-full"
          type="text"
          placeholder="description"
        />
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="text-center w-96 m-0.5 border-2 border-zinc-900 rounded-full"
          type="text"
          placeholder="price"
        />
        <input
          accept="image/*"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
        />
        <button
          onClick={handleSave}
          className="text-center w-96 m-0.5 border-2 border-zinc-900 rounded-full"
        >
          Add product
        </button>
      </div>
    </div>
  );
};

export default AddProduct;
