import React from "react";
import one_1 from "../Components/images/1.2.png";

const DetailingStudio = () => {
  return (
    <div>
      <img className="w-full" src={one_1} alt="фото машины" />
      <div>
        <div className="mt-20 mb-24 mx-24">
          <h2 className="text-4xl text-center max-lg:text-2xl">
            Toyota Detailing Studio
          </h2>
          <div className="bg-red-700 w-[97px] h-[3px] rounded ml-[46%] mt-4"></div>
          <div className="mt-24">
            <p className="mt-6">
              Детейлинг — это комплекс косметических услуг для автомобиля,
              включающих в себя мойку и химчистку салона, полировку кузова,
              покрытие кузова защитными составами. Во время такого ухода
              детально прорабатывается каждый элемент автомобиля.
            </p>
            <p className="mt-6">
              Для детейлинга используются широкий спектр высококачественных
              материалов и профессиональные инструменты.
            </p>
            <p className="mt-6">
              Можно сказать, что детейлинг — это некая культура, целая философия
              по уходу за автомобилем.
            </p>
            <p className="mt-6">
              Перечень услуг детейлинга достаточно обширен:
            </p>
            <p className="mt-6">
              - Профессиональная очистка и полировка лакокрасочного покрытия,
              дисков, стекол, фар, деталей из хрома и пластика с дальнейшим
              нанесением на них специальных защитных составов
            </p>
            <p className="mt-6">- Защита автомобиля пленками</p>
            <p className="mt-6">- Тонирование стёкол</p>
            <p className="mt-6">- Полировка кузова</p>
            <p className="mt-6">- Керамическая защита</p>
            <p className="mt-6">- Бронирование лобового стекла</p>
            <p className="mt-6">- Защитное нанопокрытие</p>
            <p className="mt-6">- Антигравийная защита</p>
            <p className="mt-6">- Шумоизоляция</p>
            <p className="mt-6">- Шумоизоляция</p>
            <p className="mt-6  ">0(999)440 124</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailingStudio;
