import React from "react";
import { Route, Routes } from "react-router-dom";
import AutoMileagePage from "../pages/AutoMileagePage";
import BuyCarPage from "../pages/BuyCarPage";
import DetailingStudio from "../pages/DeteilingStudioPage";
import ForBusinessPage from "../pages/ForBusinessPage";
import HomePage from "../pages/HomePage";
import ModelsPage from "../pages/ModelsPage";
import NotFoundPage from "../pages/NotFoundPage";
import RentCarPage from "../pages/RentCarPage";
import ServisesCar from "../pages/ServisesCar";

import Login from "../Components/Auth/Login";
import Register from "../Components/Auth/Register";
import AddProduct from "../Components/Products/AddProduct";
import GuarantPage from "../pages/GuarantPage";
import RemPage from "../pages/RemPage";
import SpessPage from "../pages/SpessPage";
import SparePage from "../pages/SparePage";
import RegisterSuccess from "../Components/Auth/RegisterSuccess";
import EditProductPage from "../pages/EditProductPage";

const MainRoutes = () => {
  const PUBLIC_ROUTES = [
    {
      link: "/models",
      element: <ModelsPage />,
      id: 1,
    },
    {
      link: "/",
      element: <HomePage />,
      id: 2,
    },

    {
      link: "/mileage",
      element: <AutoMileagePage />,
      id: 3,
    },
    {
      link: "*",
      element: <NotFoundPage />,
      id: 4,
    },
    {
      link: "/rent",
      element: <RentCarPage />,
      id: 5,
    },
    {
      link: "/detailing",
      element: <DetailingStudio />,
      id: 6,
    },
    {
      link: "/byu",
      element: <BuyCarPage />,
      id: 7,
    },
    {
      link: "/business",
      element: <ForBusinessPage />,
      id: 8,
    },
    {
      link: "/servises",
      element: <ServisesCar />,
      id: 9,
    },
    {
      link: "/register",
      element: <Register />,
      id: 10,
    },
    {
      link: "/login",
      element: <Login />,
      id: 11,
    },
    {
      link: "/register-success",
      element: <RegisterSuccess />,
      id: 12,
    },
    {
      link: "/addproduct",
      element: <AddProduct />,
      id: 13,
    },
    {
      link: "/guarant",
      element: <GuarantPage />,
      id: 14,
    },
    {
      link: "/rem",
      element: <RemPage />,
      id: 15,
    },
    {
      link: "/spare",
      element: <SparePage />,
      id: 16,
    },
    {
      link: "/spess",
      element: <SpessPage />,
      id: 17,
    },

    {
      link: "/edit/:id",
      element: <EditProductPage />,
      id: 18,
    },

  ];

  return (
    <>
      <Routes>
        {PUBLIC_ROUTES.map((item) => (
          <Route path={item.link} element={item.element} key={item.id} />
        ))}
      </Routes>
    </>
  );
};

export default MainRoutes;
