import React from "react";
import one_1 from "../Components/images/1.1.png";
import one_2 from "../Components/images/2.1.png";
import one_3 from "../Components/images/3.1.png";

const HomePage = () => {
  return (
    <div class="flex flex-col md:flex-row justify-between w-full h-full">
      <div class="md:w-1/5 md:max-lg:w-full md:text-center md:m-4">
        <h2 class="text-3xl font-bold">
          Добро пожаловать! Что Вас интересует?
        </h2>
        <div class="bg-red-700 w-16 h-0.5 mb-10 mt-5 mx-auto md:max-lg:mx-0"></div>
        <div class="text-lg text-center">
          <ul>
            <li class="h-14 opacity-70 transition-opacity hover:opacity-100 hover:bg-black hover:text-white flex justify-center items-center my-5">
              <a class="" href="#">
                Записаться на тест-драйв
              </a>
            </li>
            <li class="h-14 opacity-70 transition-opacity hover:opacity-100 hover:bg-black hover:text-white flex justify-center items-center my-5">
              <a class="" href="#">
                Прайс-листы и брошюры
              </a>
            </li>
            <li class="h-14 opacity-70 transition-opacity hover:opacity-100 hover:bg-black hover:text-white flex justify-center items-center my-5">
              <a class="" href="#">
                Гарантия Toyota Relax
              </a>
            </li>
            <li class="h-14 opacity-70 transition-opacity hover:opacity-100 hover:bg-black hover:text-white flex justify-center items-center my-5">
              <a class="" href="#">
                Кредитное предложение
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full md:w-7/12">
        <img
          class="w-full h-auto md:max-w-[720px] md:h-[300px]"
          src={one_1}
          alt="фото машины"
        />
        <div class="flex flex-col md:flex-row">
          <img
            class="w-full h-auto md:w-1/2 md:max-w-[341px] md:h-[242px] my-4 md:my-0"
            src={one_2}
            alt="фото машины"
          />
          <img
            class="w-full h-auto md:w-1/2 md:max-w-[341px] md:h-[242px] my-4 md:my-0"
            src={one_3}
            alt="фото машины"
          />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
