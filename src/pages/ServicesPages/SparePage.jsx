import React from "react";

const SparePage = () => {
  return (
    <div>
      <img className="w-full" src={img_1} alt="фото машины" />
      <div className="mt-20 mb-20 mx-24">
        <h2 className="text-3xl text-center max-lg:text-2xl">
          ЗАПЧАСТИ И АКСЕССУАРЫ
        </h2>
        <div className="bg-red-700 w-[97px] h-[3px] rounded ml-[46%] mt-4"></div>
        <p className="text-center mt-5">
          Запчасти и аксессуары Toyota для вашего автомобиля.
        </p>
      </div>
      <div className="flex justify-center mb-14">
        <div className="mr-5">
          <h2 className="text-red-700 text-4xl mb-5">01</h2>
          <p className="">Ценность</p>
          <p className="text-neutral-800 mt-3 pl-5">
            Мы предлагаем качественные <br /> запчасти и аксессуары по разумной{" "}
            <br /> цене.
          </p>
          <hr className="mt-4" />
        </div>
        <div className="mx-8">
          <h2 className="text-red-700 text-4xl mb-5">02</h2>
          <p className="decoration-black">Качество</p>
          <p className="text-neutral-800 mt-3 pl-5">
            Вы можете быть уверены в привычно <br /> высоком качестве фирменных{" "}
            <br />
            запчастей и аксессуаров Toyota.
          </p>
          <hr className="mt-4" />
        </div>
        <div className="ml-5">
          <h2 className="text-red-700 text-4xl mb-5">03</h2>
          <p className="">Удовольствие</p>
          <p className="text-neutral-800 mt-3 pl-5">
            Аксессуары, запчасти и другие товары <br /> Toyota сделают ваши
            поездки еще <br />
            приятнее.
          </p>
          <hr className="mt-4" />
        </div>
      </div>
      <div class="bg-gray-800 py-12 mt-10">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <a href="https://www.toyota-bishkek.kg/owners/maintenance-and-servicing/walk-around-check">
              <img
                class="h-56 w-full object-cover"
                src={img_4}
                alt="Картинка"
              />
              <div class="p-4">
                <h2 class="font-bold text-xl mb-2 uppercase">Аксессуары</h2>
                <p class="text-gray-700 text-base">
                  Аксессуары Toyota для вашего автомобиля
                </p>
              </div>
              <div class="mx-4 my-3 mt-32 pt-1.5">Узнать больше</div>
            </a>
          </div>
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <a href="https://www.toyota-bishkek.kg/owners/maintenance-and-servicing/recall">
              <img
                class="h-56 w-full object-cover"
                src={img_5}
                alt="Картинка"
              />
              <div class="p-4">
                <h2 class="font-bold text-xl mb-2 uppercase">
                  оригинальные запчасти Toyota
                </h2>
                <p class="text-gray-700 text-base">
                  Предлагаем вашему вниманию оригинальные запчасти,
                  разработанные специально для вашего автомобиля Toyota.
                </p>
              </div>
              <div class="mx-4 my-3 mt-14">Узнать больше </div>
            </a>
          </div>
        </div>
      </div>
      <div className="bg-gray-800 text-white pt-20 pb-24 text-center mt-10">
        <h2 className="text-3xl mb-6">Мне нужно</h2>
        <div className="flex justify-center ">
          <a href="#" className="mr-4 hover:text-slate-300">
            Записаться на тест-драйв
            <hr className="mt-2" />
          </a>
          <a href="#" className="hover:text-slate-300">
            Запросить предложение
            <hr className="mt-2" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SparePage;
