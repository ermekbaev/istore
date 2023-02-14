import React from "react";
import one_1 from "../Image/1.png";
import one_2 from "../Image/2.png";
import one_3 from "../Image/3.png";
import one_4 from "../Image/4.png";

const RentCar = () => {
  return (
    <div className="bg-black text-white">
      <img src={one_1} alt="здесь фото машины" />
      <div>
        <div className="text-center">
          <h2 className="mt-16 text-3xl">
            АРЕНДА АВТОМОБИЛЕЙ ТОЙОТА В БИШКЕКЕ
          </h2>
          <div className="bg-red-700 w-[97px] h-[3px] rounded ml-[46%] mt-4"></div>
          <h2 className="mt-[90px] mb-[60px] text-3xl">
            ЗАПРОСИТЬ ПРЕДЛОЖЕНИЕ ПО АРЕНДЕ
          </h2>
        </div>
        <div className="ml-[190px] text-lg">
          <h4 className="text-slate-300 text-xl mb-1">
            Пожалуйста, заполните все поля, отмеченные *
          </h4>
          <div className="flex">
            <div>
              <h3 className="font-extrabold mb-[5px] ">
                Интересующая модель *
              </h3>
              <select className="text-white mr-5 w-[430px] h-[40px] bg-gray-700 ">
                <option value="text">Выберите модель</option>
                <option value="text">corolla</option>
                <option value="text">camry</option>
              </select>
              {/* //! <p className="text-red-700">Необходимо выбрать модель!</p> */}
            </div>
            <div>
              <h3 className="font-extrabold mb-[5px]">Дилер *</h3>
              <select className="bg-gray-700 text-white  w-[183px] w-[430px] h-[40px] ">
                <option value="text">Тойота Центр Бишкек</option>
              </select>
            </div>
          </div>
          <div className="flex">
            <div>
              <h3 className="font-extrabold mt-[10px] mb-[5px]">
                Имя и Фамилия *
              </h3>
              <input
                className="bg-gray-700 text-white mr-5 w-[183px] w-[430px] h-[40px]"
                type="text"
              />
              {/* //!  <p className="text-red-700">Ваше полное имя обязательно!</p> */}
            </div>
            <div>
              <h3 className="font-extrabold  mt-[10px] mb-[5px]">
                Email адрес *
              </h3>
              <input
                className="bg-gray-700 text-white w-[183px] w-[430px] h-[40px]"
                type="text"
              />
              {/*//! <p className="text-red-700">Email адрес обязателен!</p> */}
            </div>
          </div>
          <div>
            <h3 className="font-extrabold  mt-[10px] mb-[5px]">Телефон *</h3>
            <div>
              <select className="bg-gray-700 text-white mr-[10px] w-[100px] h-[40px] ">
                <option value="number">+996</option>
                <option value="number">+7</option>
              </select>
              <input
                className="bg-gray-700 text-white w-[320px] h-[40px]"
                type="text"
                placeholder="706080079"
              />
              {/* //! <p className="text-red-700">Необходимо выбрать модель!</p> */}
            </div>
            <div className="flex mt-[20px]">
              <input
                className=" font-extrabold"
                type="checkbox"
                id="scales"
                name="scales"
              />
              <p className="text-sm ml-4">
                Согласие на сбор, обработку персональных данных *
              </p>
            </div>
            {/*//! <p className="text-red-700">
               //!Вам необходимо дать согласие перед отправкой своих личных данных
               //!</p> */}
          </div>
          <div className="mt-6 ml-[555px]">
            <button className="bg-gray-700 text-white mr-4 py-3 px-9">
              Очистить
            </button>
            <button className="bg-gray-700 text-white py-3 px-9">
              Отправить
            </button>
          </div>
        </div>
      </div>
      <div>
        <div className="mx-28 mt-80">
          <h2 className="text-3xl text-center mb-16">
            Тойота Центр Бишкек представляет новую программу с возможностью
            брать автомобили в прокат
          </h2>
          <img src={one_2} alt="фото машины" />
          <p className="mt-14 mb-16 text-slate-300">
            Арендовать автомобиль Тойота можно для бизнес-встреч и путешествий,
            встречать гостей или использовать арендуемый транспорт, пока ваш
            автомобиль находится в ремонте.
          </p>
          <img src={one_3} alt="фото машины" />
          <h2 className="text-center text-3xl mt-14 mb-16">
            АВТОМОБИЛИ TOYOTA В АРЕНДУ
          </h2>
          <img src={one_4} alt="фото машины" />
          <div className="mt-16 mb-[70px] text-slate-300">
            <h3 className="text-white font-extrabold text-base">
              Необходимые документы:
            </h3>
            <h4 className="my-5">Удостоверение личности</h4>
            <h4>Водительское удостоверение</h4>
          </div>
          <h4 className="mb-20 text-slate-300">
            Договор заключается только один раз — это займёт не более 30 минут.
            Впоследствии его можно продлевать в любое удобное время.
          </h4>
        </div>
        <div className="bg-gray-800 text-white  pt-20 pb-24 text-center">
          <h2 className="text-3xl mb-6">Мне нужно</h2>
          <div>
            <a href="#" className="mr-4 hover:text-slate-300">
              Записаться на тест-драйв
            </a>
            <a href="#" className="hover:text-slate-300">
              Запросить предложение
            </a>
          </div>
        </div>
        <div className="bg-red-700 w-80 h-1"></div>
      </div>
    </div>
  );
};

export default RentCar;
