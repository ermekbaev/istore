import React from "react";
import { useNavigate } from "react-router-dom";
import { useProducts } from "../../Contexts/ProductContextProvider";

const ProductCard = ({ item }) => {
  const { deleteProduct } = useProducts();
  const navigate = useNavigate();
  return (
    <div className="border border-dark m-3">
      <img src={item.image} width="200" alt="" />
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <p>{item.category}</p>
      <p>{item.description}</p>
      <p>{item.stock}</p>
      <p>{item.owner_email}</p>

      <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
      <button onClick={() => deleteProduct(item.id)}>Delete</button>

      {/* {item.is_author ? (
        <>
          <button onClick={() => navigate(`/edit/${item.id}`)}>Edit</button>
          <button onClick={() => deleteProduct(item.id)}>Delete</button>
        </>
      ) : null} */}
    </div>
  );
};

export default ProductCard;
