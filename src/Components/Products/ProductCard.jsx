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
    <div className="border border-dark m-3">
      <img src={item.image} width="200" alt="" />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <p>{item.category}</p>
      <p>{item.description}</p>

      {/* <p>{item.stock}</p> */}
      {/* <p>{item.owner_email}</p> */}


      {item.is_author ? (
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
      ) : null}
    </div>
  );
};

export default ProductCard;
