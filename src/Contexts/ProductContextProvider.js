import axios from "axios";
import React, { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

export const productContect = createContext();
export const useProducts = () => useContext(productContect);

const INIT_STATE = {
  products: [],
  pages: 0,
  categories: [],
  oneProduct: null,
};

function reducer(state = INIT_STATE, action) {
  switch (action.type) {
    case "GET_PRODUCTS":
      return {
        ...state,
        products: action.payload.results,
        pages: Math.ceil(action.payload.count / 2),
      };
    case "GET_CATEGORIES":
      return { ...state, categories: action.payload };
    case "GET_ONE_PRODUCT":
      return { ...state, oneProduct: action.payload };
    default:
      return state;
  }
}

const API = "http://34.133.58.163/api/v1";
const ProductContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [state, dispatch] = useReducer(reducer, INIT_STATE);

  const getProducts = async () => {
    try {
      const { data } = await axios.get(
        `${API}/products/${window.location.search}`
        // config
      );
      dispatch({ type: "GET_PRODUCTS", payload: data });
      console.log(data.results);
    } catch (error) {
      console.log(error);
    }
    // try {
    //   const tokens = JSON.parse(localStorage.getItem("tokens"));
    //   const Authorization = `Bearer ${tokens.access}`;
    //   const config = {
    //     headers: {
    //       Authorization,
    //     },
    //   };
    // } catch (error) {
    // console.log(error);
    // }
  };

  const getCategories = async () => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/categories/`, config);

      dispatch({
        type: "GET_CATEGORIES",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const createProduct = async (newProduct) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.post(`${API}/products/`, newProduct, config);
      console.log(res.data.results);
      navigate("/models");
      // getProducts();
    } catch (error) {
      console.log(error);
    }
  };

  const deleteProduct = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.delete(`${API}/products/${id}/`, config);
      getProducts();
      console.log();
    } catch (error) {
      console.log(error);
    }
  };

  const getOneProduct = async (id) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.get(`${API}/products/${id}/`, config);
      console.log(res);
      dispatch({
        type: "GET_ONE_PRODUCT",
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const updateProduct = async (id, editedProduct) => {
    try {
      const tokens = JSON.parse(localStorage.getItem("tokens"));
      const Authorization = `Bearer ${tokens.access}`;
      const config = {
        headers: {
          Authorization,
        },
      };
      const res = await axios.patch(
        `${API}/products/${id}/`,
        editedProduct,
        config
      );
      navigate("/products");
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const values = {
    getProducts,
    products: state.products,
    pages: state.pages,
    getCategories,
    categories: state.categories,
    createProduct,
    deleteProduct,
    getOneProduct,
    oneProduct: state.oneProduct,
    updateProduct,
  };
  return (
    <productContect.Provider value={values}>{children}</productContect.Provider>
  );
};

export default ProductContextProvider;
