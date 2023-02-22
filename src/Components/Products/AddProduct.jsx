import React, { useEffect, useState } from "react";
// import { Navigate } from "react-router-dom";
import { useProducts } from "../../Contexts/ProductContextProvider";

const AddProduct = () => {
  const { getCategories, categories, createProduct } = useProducts();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);
  const [stock, setStock] = useState("");
  const [owner, setOwner] = useState(0);

  useEffect(() => {
    getCategories();
  }, []);

  function handleSave(e) {
    e.preventDefault();
    let newProduct = new FormData();
    newProduct.append("title", title);
    newProduct.append("description", description);
    newProduct.append("price", price);
    newProduct.append("category", category);
    newProduct.append("image", image);
    newProduct.append("stock", stock);
    newProduct.append("owner", owner);

    createProduct(newProduct);
  }

  return (
    <div className="mt-6  m-auto max-w-md text-center pb-12">
      <div className="">
        <h2 className="mt-10 text-3xl font-bold text-gray-900">
          Добавить машину
        </h2>
      </div>

      <div className=" backdrop-blur-xl mx-auto rounded-xl shadow-xl p-10 w-full max-w-md">
        <form action="#" autoComplete="off" className="space-y-6">
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            name=""
            id=""
          >
            <option value="">choose category</option>

            {categories.map((item) => (
              <option key={item.slug} value={item.slug}>
                {item.name}
              </option>
            ))}
          </select>

          <div>
            <label
              htmlFor="title"
              className=" float-left block text-sm font-medium text-gray-700"
            >
              Title
            </label>
            <div className="mx-auto relative rounded-md shadow-sm mt-1 ">
              <input
                onChange={(e) => setTitle(e.target.value)}
                type="text"
                id="title"
                required
                className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500
              text-sm pl-10 w-full"
                placeholder="Title"
              />
            </div>
          </div>
          <div>
            <label
              htmlFor="Description"
              className=" float-left block text-sm font-medium text-gray-700"
            >
              Description
            </label>
            <div className="mx-auto relative rounded-md shadow-sm mt-1 ">
              <input
                onChange={(e) => setDescription(e.target.value)}
                type="text"
                id="description"
                required
                className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500
              text-sm pl-10 w-full"
                placeholder="Description"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="price"
              className=" float-left block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <div className="mx-auto relative rounded-md shadow-sm mt-1 ">
              <input
                onChange={(e) => setPrice(e.target.value)}
                type="text"
                id="price"
                required
                className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500
              text-sm pl-10 w-full"
                placeholder="Price"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="picture"
              className="float-left block text-sm font-medium text-gray-700"
            >
              Picture
            </label>
            <div className="mx-auto relative rounded-md shadow-sm mt-1 ">
              <input
                accept="image/*"
                onChange={(e) => setImage(e.target.files[0])}
                type="file"
                id="picture"
                className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500
              text-sm pl-10 w-full"
                placeholder="Picture"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="Stock"
              className="float-left block text-sm font-medium text-gray-700"
            >
              stock
            </label>
            <div className="mx-auto relative rounded-md shadow-sm mt-1 ">
              <input
                onChange={(e) => setStock(e.target.value)}
                type="text"
                id="stock"
                className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500
              text-sm pl-10 w-full"
                placeholder="Stock"
              />
            </div>
          </div>

          <div>
            <label
              htmlFor="owner"
              className="float-left block text-sm font-medium text-gray-700"
            >
              owner
            </label>
            <div className="mx-auto relative rounded-md shadow-sm mt-1 ">
              <input
                onChange={(e) => setOwner(e.target.value)}
                type="id"
                id="owner"
                className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500
              text-sm pl-10 w-full"
                placeholder="Owner
                "
              />
            </div>
          </div>

          <button onClick={handleSave}>Добавить</button>
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
