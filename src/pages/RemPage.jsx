import React from "react";
import one_1 from "../Components/images/1.rem.png";
import one_2 from "../Components/images/2.rem.png";
import one_3 from "../Components/images/3.rem.png";
import one_4 from "../Components/images/4.rem.png";

const RemPage = () => {
  return (
    <div>
      <img className="w-full" src={one_1} alt="фото машины" />
      <div className="mt-20 mb-20 mx-24">
        <h2 className="text-3xl text-center max-lg:text-2xl">
          Обслуживание, ремонт, техосмотр
        </h2>
        <div className="bg-red-700 w-[97px] h-[3px] rounded ml-[46%] mt-4"></div>
        <p className="text-center mt-5">
          Откройте для себя возможности фирменного техобслуживания и ремонта
          Toyota.
        </p>
      </div>
      <div className="flex justify-center mb-14">
        <div className="mr-5">
          <h2 className="text-red-700 text-4xl mb-5">01</h2>
          <p className="">
            Пользуйтесь своим автомобилем из года <br /> в год:
          </p>
          <p className="text-neutral-800 mt-3 pl-5">
            Благодаря нашим услугам по <br /> техобслуживанию и ремонту вы
            всегда <br />
            будете получать такое же <br /> удовольствие от вождения вашей{" "}
            <br /> Toyota, как и в день ее покупки.
          </p>
          <hr className="mt-4" />
        </div>
        <div className="mx-8">
          <h2 className="text-red-700 text-4xl mb-5">02</h2>
          <p className="decoration-black">Широкий спектр комплексных услуг:</p>
          <p className="text-neutral-800 mt-3 pl-5">
            Мы осуществляем все виды ремонта и <br /> обслуживания любых
            автомобилей <br />
            Toyota качественно и по разумной <br /> цене.
          </p>
          <hr className="mt-16" />
        </div>
        <div className="ml-5">
          <h2 className="text-red-700 text-4xl mb-5">03</h2>
          <p className="">Качество Toyota:</p>
          <p className="text-neutral-800 mt-3 pl-5">
            Мы используем оригинальные <br /> запчасти, а все наши технические{" "}
            <br />
            специалисты прошли специальное <br /> обучение, чтобы всегда
            радовать вас <br />
            привычно высоким качеством <br /> обслуживания.
          </p>
          <hr className="mt-4" />
        </div>
      </div>
      <div class="bg-gray-800 py-12">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <a href="https://www.toyota-bishkek.kg/owners/maintenance-and-servicing/walk-around-check">
              <img
                class="h-56 w-full object-cover"
                src={one_2}
                alt="Картинка"
              />
              <div class="p-4">
                <h2 class="font-bold text-xl mb-2 uppercase">Общий осмотр</h2>
                <p class="text-gray-700 text-base">
                  Официальные сервисные центры Toyota — это прозрачные услуги и
                  профессионалы, которым вы смело можете доверять.
                </p>
              </div>
              <div class="mx-4 my-3 mt-32 pt-1">Узнать больше</div>
            </a>
          </div>
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <a href="https://www.toyota-bishkek.kg/owners/maintenance-and-servicing/recall">
              <img
                class="h-56 w-full object-cover"
                src={one_3}
                alt="Картинка"
              />
              <div class="p-4">
                <h2 class="font-bold text-xl mb-2 uppercase">
                  Cервисные кампании
                </h2>
                <p class="text-gray-700 text-base">
                  Ваша безопосность - наш главный приоритет.Проверьте, не попал
                  ли ваш автомобиль Toyota под одзывную компанию
                </p>
              </div>
              <div class="mx-4 my-3 mt-32 pt-1">Узнать больше </div>
            </a>
          </div>
          <div class="bg-white rounded-lg shadow-md overflow-hidden">
            <a href="https://www.toyota-bishkek.kg/owners/maintenance-and-servicing/repair">
              <img
                class="h-56 w-full object-cover"
                src={one_4}
                alt="Картинка"
              />
              <div class="p-4">
                <h2 class="font-bold text-xl mb-2 uppercase">
                  Cервисные кампании
                </h2>
                <p class="text-gray-700 text-base">
                  Аварии не нравятся никому. Однако это может случиться даже с
                  самым осторожным водителем. Большинство людей проживают жизнь
                  без каких-либо дорожных происшествий. Если у вас произошла
                  авария или другие неприятности с автомобилем, официальные
                  сервисные центры Toyota всегда готовы помочь вам с ремонтом.
                </p>
              </div>
              <div class="mx-4 my-3 ">Узнать больше</div>
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

export default RemPage;
