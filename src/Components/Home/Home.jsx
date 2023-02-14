import React from "react";
import one_1 from "../Image/1.1.png";
import one_2 from "../Image/2.1.png";
import one_3 from "../Image/3.1.png";
const Home = () => {
  return (
    <div className="bg-black text-white">
      <div className="flex">
        <div className="ml-[100px] mt-[60px]">
          <h2 className="text-3xl">
            Добро <br /> пожаловать!
            <br /> Что Вас <br /> интересует?
          </h2>
          <div className="bg-red-600 my-4 w-20 h-[3px]"></div>
          <div className="inline-block text-slate-300 text-black">
            <ul>
              <li className="my-2 py-2 px-3 bg-white">
                <a href="#">Записаться на тест-драйв</a>{" "}
              </li>
              <br />
              <li className="my-2 p-2 bg-white">
                <a href="#">Прайс-листы и брошюры</a>{" "}
              </li>
              <br />
              <li className="my-2 p-2 bg-white">
                <a href="#">Гарантия Toyota Relax</a>{" "}
              </li>
              <br />
              <li className="my-2 p-2 bg-white">
                <a href="#">Кредитное предложение</a>{" "}
              </li>
              <br />
            </ul>
          </div>
        </div>
        <div className="ml-[125px]">
          {/* ml-[51px] */}
          <img className="" src={one_1} alt="фото машины" />
          {/* <p>Подробнее *</p> */}
          <div className="flex">
            <img src={one_2} alt="фото машины" />
            {/* <p>Подробнее *</p> */}
            {/* <img src={one_3} alt="фото машины" /> */}
            {/* <p>Подробнее *</p> */}
          </div>
        </div>
      </div>
      <div className="bg-red-700 w-80 h-1"></div>
    </div>
  );
};

export default Home;
