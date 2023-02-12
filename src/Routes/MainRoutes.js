import React from "react";
import { Route, Routes } from "react-router-dom";
import AutoMileagePage from "../pages/AutoMileagePage";
import BuyCarPage from "../pages/BuyCarPage";
import DetailingStudio from "../pages/DeteilingStudioPage";
import ForBisnessPage from "../pages/ForBisnessPage";
import HomePage from "../pages/HomePage";
import ModelsPage from "../pages/ModelsPage";
import NotFoundPage from "../pages/NotFoundPage";
import RentCarPage from "../pages/RentCarPage";
import ServisesCar from "../pages/ServisesCar";

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
      link: "/buisness",
      element: <ForBisnessPage />,
      id: 8,
    },
    {
      link: "/edit/:id",
      element: <ServisesCar />,
      id: 9,
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
