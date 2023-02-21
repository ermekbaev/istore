import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProducts } from "../../Contexts/ProductContextProvider";

const EditProduct = () => {
  const {
    getCategories,
    categories,
    createProduct,
    getOneProduct,
    oneProduct,
    updateProduct,
  } = useProducts();

  const navigate = useNavigate();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    getOneProduct(id);
    getCategories();
  }, []);

  useEffect(() => {
    if (oneProduct) {
      setTitle(oneProduct.title);
      setDescription(oneProduct.description);
      setPrice(oneProduct.price);
      setCategory(oneProduct.category.id);
    }
  }, [oneProduct]);

  function handleSave() {
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    if (image) {
      newProduct.append("image", image);
    }
    updateProduct(id, newProduct);
  }

  return (
    <div className="d-flex flex-column w-50 m-auto">
      <h1>Edit product</h1>

      <p>CATEGORY BEFORE: {oneProduct?.category.title} </p>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        name=""
        id=""
      >
        <option value="">choose category</option>

        {categories.map((item) => (
          <option key={item.id} value={item.id}>
            {item.title}
          </option>
        ))}
      </select>
      <input
        onChange={(e) => setTitle(e.target.value)}
        type="text"
        value={title}
        placeholder="title"
      />
      <input
        onChange={(e) => setDescription(e.target.value)}
        type="text"
        value={description}
        placeholder="description"
      />
      <input
        onChange={(e) => setPrice(e.target.value)}
        type="text"
        value={price}
        placeholder="price"
      />

      <img width={200} src={oneProduct?.image} alt="" />

      <input
        accept="image/*"
        onChange={(e) => setImage(e.target.files[0])}
        type="file"
      />
      <button onClick={handleSave}>Save product</button>
    </div>
  );
};

export default EditProduct;
