import React, { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
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
    newProduct.append("image", image);
    createProduct(newProduct);
  }

  return (
    <div className="mt-6  m-auto max-w-md text-center pb-12">
      <div className="">
        <h2 className="mt-10 text-3xl font-bold text-gray-900">
          Добавить машину
        </h2>
      </div>
      <p>CATEGORY BEFORE: {oneProduct?.category.title} </p>

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
              <option key={item.id} value={item.id}>
                {item.title}
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
                onChange={(e) => setImage(e.target.value)}
                type="text"
                id="picture"
                minLength="8"
                className="border-gray-300 rounded-md focus:border-green-500 focus:ring-green-500
              text-sm pl-10 w-full"
                placeholder="Picture"
              />
            </div>
          </div>
          <button onClick={handleSave}>Вход</button>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
