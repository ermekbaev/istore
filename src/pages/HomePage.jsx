import React from "react";
import one_1 from "../Components/images/1.1.png";
import one_2 from "../Components/images/2.1.png";
import one_3 from "../Components/images/3.1.png";

const HomePage = () => {
  return (
    <div className="flex justify-between w-full h-full sm:max-md:inline-block md:max-lg:inline-block overflow-x-hidden">
      <div className=" ml-36 my-28 w-1/5 md:max-lg:w-full sm:max-md:text-center md:m-4 sm:max-md:w-3/5">
        <h2 className=" text-3xl font-bold max-[638px]:w-[80%] md:max-lg:m-auto sm:max-md:m-auto  md:max-lg:text-center">
          Добро пожаловать! Что Вас интересует?
        </h2>
        <div className="w-[100%] self-center flex justify-center">
          <div className="bg-red-700 w-16 h-0.5 mb-10 mt-5 self-center "></div>
        </div>

        <div className=" text-lg text-center md:max-lg:text-center">
          <ul>
            <li className="m-5 h-14 hover:bg-black hover:text-white flex justify-center items-center ">
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
      <div className="w-8/12 h-auto sm:max-md:flex sm:max-md:w-full sm:max-md:p-4 sm:max-md:flex-col sm:max-md:justify-between md:max-lg:flex md:max-lg:w-full md:max-lg:p-4 md:max-lg:flex-col md:max-lg:justify-between">
        <a href="https://www.toyota-bishkek.kg/new-cars/rav4">
          <img
            className="w-100 sm:max-md:py-4 sm:max-md:w-[70%] sm:max-md:h-72 sm:max-md:m-auto md:max-lg:py-4 md:max-lg:w-[70%] md:max-lg:h-72 md:max-lg:m-auto"
            src={one_1}
            alt="фото машины"
          />
        </a>
        <div className="flex sm:max-md:inline-block md:max-lg:inline-block">
          <a href="https://www.toyota-bishkek.kg/owners/warranty/toyota-relax">
            <img
              className="w-full sm:max-md:py-4 sm:max-md:w-[70%] sm:max-md:m-auto md:max-lg:py-4 md:max-lg:w-[70%] md:max-lg:m-auto"
              src={one_2}
              alt="фото машины"
            />
          </a>
          <a href="https://www.toyota-bishkek.kg/owners/service-offers/favorable-february-weekend">
            <img
              className="w-full sm:max-md:py-4 sm:max-md:w-[70%] sm:max-md:m-auto md:max-lg:py-4 md:max-lg:w-[70%] md:max-lg:m-auto"
              src={one_3}
              alt="фото машины"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
