import React from "react";
import one_1 from "../Components/images/1.service.png";

const ServisesCar = () => {
  return (
    <div class="flex flex-col md:flex-row justify-between mx-4 md:mx-28 my-8 md:my-32">
      <div class="w-full md:w-1/2 md:pr-4">
        <ul class="text-2xl cursor-pointer">
          <li class="mt-10 opacity-50 transition-opacity hover:opacity-100">
            <a href="/guarant">Гарантия</a>
          </li>
          <li class="mt-6 opacity-50 transition-opacity hover:opacity-100">
            <a href="/rem">Обслуживание, ремонт, техосмотр</a>
          </li>
          <li class="mt-6 opacity-50 transition-opacity hover:opacity-100">
            <a href="/spare">Запчасти и аксессуары</a>
          </li>
          <li class="mt-6 opacity-50 transition-opacity hover:opacity-100">
            <a href="/spess">Специальные предложения сервиса</a>
          </li>
        </ul>
      </div>
      <div class="">
        <div class="mx-auto md:mx-0 max-w-sm md:max-w-full">
          <img
            class="shadow hover:shadow-lg border border-gray-300 w-full"
            src={one_1}
            alt="фото"
          />
        </div>
      </div>
    </div>
  );
};

export default ServisesCar;
