import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../Contexts/ProductContextProvider";
import { AiOutlineDelete, AiOutlineShopping } from "react-icons/ai";
import { useCart } from "../../Contexts/CartContextProduct";
import { useAuth } from "../../Contexts/AuthContextProvider";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();
  // const { addProductToCart, checkProductInCart } = useCart();

  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap">
      <div className="border border-dark m-3">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <img
              class="h-96 w-full object-cover"
              src={item.image}
              alt="Картинка"
            />
            <div class="p-4">
              <h2 class="font-bold text-xl mb-2 uppercase">{item.title}</h2>
              <p class="text-gray-700 text-base">{item.description}</p>
              <p class="text-gray-700 text-base">{item.price}</p>
            </div>
            <p class="mx-4 my-3 mt-32 pt-1.5">{item.category}</p>
          </div>
        </div>

        {/* <p>{item.stock}</p> */}
        {/* <p>{item.owner_email}</p> */}

        <>
          <button
            className="m-2 bg-slate-600 w-20 text-white border-gray-300 rounded-md
                text-sm "
            onClick={() => navigate(`/edit/${item.id}`)}
          >
            Edit
          </button>
          <button className="m-2" onClick={() => deleteProduct(item.id)}>
            <AiOutlineDelete />
          </button>
        </>
      </div>
    </div>
  );
};

export default ProductCard;
