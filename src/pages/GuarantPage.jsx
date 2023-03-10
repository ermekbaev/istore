import React from "react";
import one_1 from "../Components/images/1.gar.png";

const GuarantPage = () => {
  return (
    <div>
      <img className="w-full" src={one_1} al t="фото машины" />
      <div>
        <div className="mt-20 mb-20 mx-24">
          <h2 className="text-3xl text-center max-lg:text-2xl">
            ГАРАНТИЯ НА АВТОМОБИЛИ TOYOTA
          </h2>
          <div className="bg-red-700 w-[97px] h-[3px] rounded ml-[46%] mt-4"></div>
          <div className="mt-24">
            <h3 className="mt-6 font-bold text-xl">Гарантийный срок</h3>
            <p className="mt-4">
              Гарантийный срок на новый автомобиль Toyota, купленный у
              официального дилера, составляет 3 года (36 месяцев) или 100 000 км
              пробега — в зависимости от того, что наступит ранее. Владелец
              вправе предъявить требования по гарантии, связанные с недостатками
              автомобиля Toyota, за которые отвечает продавец (производитель),
              только в течение гарантийного срока.
            </p>
            <p className="mt-4">
              Гарантийный срок остаётся неизменным независимо от срока,
              необходимого для устранения обнаруженных недостатков автомобиля
              Toyota, в течение которого он не мог использоваться.
            </p>
            <h3 className="mt-6 font-bold text-xl">
              Условия предоставления гарантии
            </h3>
            <p className="mt-4">
              Техническое обслуживание и ремонт в период гарантийного срока
              рекомендуется выполнять только в официальных дилерских / сервисных
              центрах Toyota. Получение планового технического обслуживания,
              дополнительного технического обслуживания и ремонта не у
              официального представителя Toyota может повлечь невозможность
              удовлетворения гарантийных требований.
            </p>
            <h3 className="mt-6 font-bold text-xl">
              Условия действия гарантии
            </h3>
            <p className="mt-4">
              Техническое обслуживание и ремонт в период гарантийного срока
              рекомендуется выполнять только в официальных дилерских / сервисных
              центрах Toyota. Получение планового технического обслуживания,
              дополнительного технического обслуживания и ремонта не у
              официального представителя Toyota может повлечь невозможность
              удовлетворения гарантийных требований.
            </p>
            <h3 className="mt-6 font-bold text-xl">Обязанности владельца</h3>
            <p className="mt-4">
              • Предъявлять руководство по гарантийному обслуживанию при
              посещении официального дилера Toyota во всех случаях, когда
              необходимо проведение гарантийного ремонта.
            </p>
            <p>
              • Эксплуатировать, обслуживать, хранить, транспортировать и
              содержать автомобиль Toyota в соответствии с руководством по
              гарантийному обслуживанию и руководством для владельца.
            </p>
            <p>
              • Сохранять чеки, счета, акты выполненных работ, заказ-наряды,
              записи на установку аксессуаров и другие необходимые документы,
              относящиеся к истории приобретения и обслуживания автомобиля
              Toyota.
            </p>
            <p>
              • Каждый раз перед началом поездки проводить осмотр автомобиля в
              соответствии с инструкцией, содержащейся в разделе
              «Самостоятельное техническое обслуживание» руководства по
              гарантийному обслуживанию.
            </p>
            <p>
              • Для проведения планового технического обслуживания автомобиль
              Toyota должен быть предоставлен официальному дилеру при показаниях
              одометра, отличающихся от рекомендованных в руководстве для
              владельца не более чем на 250 км в большую сторону.
            </p>
            <h3 className="mt-6 font-bold text-xl">
              Гарантия на вывезенный или перепроданный автомобиль
            </h3>
            <p className="mt-4">
              Если владелец вывозит автомобиль Toyota за пределы Республики
              Казахстан и Кыргызской Республики, продаёт или перепродаёт его за
              пределами этих государств, любая гарантия считается утратившей
              силу.
            </p>
          </div>
        </div>
      </div>
      <div className="mx-24">
        <div className="py-5 cursor-pointer">
          <h2>
            На что распространяется гарантия
            <hr className="mt-4" />
          </h2>
        </div>
        <div className="py-5 cursor-pointer">
          <h2>
            На что не распространяется гарантия
            <hr className="mt-4" />
          </h2>
        </div>
        <button className="m-10 pt-3.5 pb-3 px-7 bg-gray-800 text-white">
          <a href="https://www.toyota-bishkek.kg/forms/book-a-service">
            Запис на сервер
          </a>
        </button>
      </div>
      <div className="bg-gray-800 text-white pt-20 pb-24 text-center">
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

export default GuarantPage;
