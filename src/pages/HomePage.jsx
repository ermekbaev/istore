import React from "react";
import one_1 from "../Components/images/1.1.png";
import one_2 from "../Components/images/2.1.png";
import one_3 from "../Components/images/3.1.png";

const HomePage = () => {
  return (
    <div className="flex justify-around w-full h-home">
      <div className="L:ml-20  L:my-24 lg:my-16 lg:ml-0 lg:w-1/5 md:w-2/5 md:ml-0 ">
        <h2 className="L:text-3xl lg:text-xl font-bold md:my-5 md:ml-10 lg:ml-0">
          Добро <br /> пожаловать! Что
          <br /> Вас интересует?
        </h2>
        <div className="bg-red-700 w-16 h-0.5 mb-10 mt-5 md:my-5 md:ml-10 lg:ml-0"></div>

        <div className=" md:text-sm  lg:text-sm L:text-lg  text-center">
          <ul>
            <li className="m-5 h-14 hover:bg-black hover:text-white flex justify-center items-center">
              <a className="" href="#">
                Записаться на тест-драйв
              </a>
            </li>
            <li className="m-5 h-14 hover:bg-black hover:text-white flex justify-center items-center">
              <a className="" href="#">
                Прайс-листы и брошюры
              </a>
            </li>
            <li className="m-5 h-14 hover:bg-black hover:text-white flex justify-center items-center">
              <a className="" href="#">
                Гарантия Toyota Relax
              </a>
            </li>
            <li className="m-5 h-14 hover:bg-black hover:text-white flex justify-center items-center">
              <a className="" href="#">
                Кредитное предложение
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="md:w-6/12 lg:w-6/12 L:w-8/12 md:pt-20 lg:pt-20 L:pt-5  h-auto">
        <img className="L:w-full" src={one_1} alt="фото машины" />
        <div className="flex ">
          <img
            className="md:w-1/2 lg:w-1/2 L:w-full"
            src={one_2}
            alt="фото машины"
          />
          <img
            className="md:w-1/2 lg:w-1/2 L:w-full"
            src={one_3}
            alt="фото машины"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
