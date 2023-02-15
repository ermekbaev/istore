import React from "react";
import one_1 from "../Components/images/1.1.png";
import one_2 from "../Components/images/2.1.png";
import one_3 from "../Components/images/3.1.png";

const HomePage = () => {
  return (
    <div className="flex justify-between w-full h-home">
      <div className=" ml-36 my-28 w-1/5">
        <h2 className=" text-3xl font-bold">
          Добро <br /> пожаловать! Что
          <br /> Вас интересует?
        </h2>
        <div className="bg-red-700 w-16 h-0.5 mb-10 mt-5"></div>

        <div className=" text-lg text-center">
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
      <div className="w-8/12 h-auto">
        <img className="w-full" src={one_1} alt="фото машины" />
        <div className="flex ">
          <img className="w-full" src={one_2} alt="фото машины" />
          <img className="w-full" src={one_3} alt="фото машины" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
