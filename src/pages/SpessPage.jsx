import React from "react";
import one_1 from "../Components/images/1.spess.png";
import one_2 from "../Components/images/2.spess.png";
import one_3 from "../Components/images/3.spess.png";

const SpessPage = () => {
  return (
    <div class="max-w-4xl mx-auto my-20">
      <div class="flex flex-wrap justify-between items-center mb-8">
        <div class="w-full sm:w-full md:w-1/2 p-2">
          <div class="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              class="h-40 sm:h-auto w-full object-cover"
              src={one_1}
              alt="Картинка 1"
            />
            <div class="px-4 py-6 text-center">
              <h2 class="text-2xl sm:text-lg font-bold text-gray-800 mb-4">
                -30% на все виды диагностики
              </h2>
            </div>
            <div class="bg-gray-700 p-4 text-center">
              <h3 class="text-lg font-bold text-white mb-2">
                09.02.2023 31.03.2023
              </h3>
              <button class="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-8 rounded mt-2">
                <a href="https://www.toyota-bishkek.kg/owners/service-offers/diagnostics-discounts">
                  Узнать больше
                </a>
              </button>
            </div>
          </div>
        </div>
        <div class="w-full sm:w-full md:w-1/2 p-2">
          <div class="bg-white rounded-lg overflow-hidden shadow-lg">
            <img
              class="h-40 sm:h-auto w-full object-cover"
              src={one_2}
              alt="Картинка 1"
            />
            <div class="px-4 py-6 text-center">
              <h2 class="text-2xl sm:text-lg font-bold text-gray-800 mb-4">
                Выгодные выходные февраля
              </h2>
            </div>
            <div class="bg-gray-700 p-4 text-center">
              <h3 class="text-lg font-bold text-white mb-2">
                06.02.2023 28.02.2023
              </h3>
              <button class="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-8 rounded mt-2">
                <a href="https://www.toyota-bishkek.kg/owners/service-offers/favorable-february-weekend">
                  Узнать больше
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full sm:w-full md:w-1/2 p-2">
        <div class="bg-white rounded-lg overflow-hidden shadow-lg">
          <img
            class="h-40 sm:h-auto w-full object-cover"
            src={one_3}
            alt="Картинка 1"
          />
          <div class="px-4 py-6 text-center">
            <h2 class="text-2xl sm:text-lg font-bold text-gray-800 mb-4">
              СПЕЦИАЛЬНЫЙ СЕРВИСНЫЙ ТАРИФ
            </h2>
          </div>
          <div class="bg-gray-700 p-4 text-center">
            <h3 class="text-lg font-bold text-white mb-2">
              05.01.2023 28.02.2023
            </h3>
            <button class="bg-black hover:bg-white hover:text-black text-white font-bold py-2 px-8 rounded mt-2">
              <a href="https://www.toyota-bishkek.kg/owners/service-offers/servis-tarif">
                Узнать больше
              </a>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpessPage;
