import React from "react";
import one_1 from "../Components/images/1.buss.png";
import one_2 from "../Components/images/2.buss.png";
import one_3 from "../Components/images/10.buss.png";
import one_4 from "../Components/images/8.buss.png";
import one_5 from "../Components/images/9.buss.png";
import one_6 from "../Components/images/6.buss.png";
import one_7 from "../Components/images/4.buss.png";
import one_8 from "../Components/images/7.buss.png";
import one_9 from "../Components/images/3.buss.png";
import one_10 from "../Components/images/4.buss.png";

const ForBusinessPage = () => {
  return (
    <div>
      <img className="w-full" src={one_1} alt="фото машины" />
      <div>
        <div className="mt-20 mb-24 mx-24">
          <h2 className="text-3xl text-center max-lg:text-2xl">
            КОРПОРАТИВНЫЕ ПРОДАЖИ: ПОЧЕМУ <br /> БИЗНЕС ВЫБИРАЕТ TOYOTA
          </h2>
          <div className="bg-red-700 w-[97px] h-[3px] rounded ml-[46%] mt-4"></div>
          <div className="mt-24">
            <p className="mt-4">
              Корпоративные клиенты в Казахстане и Кыргызстане традиционно
              выбирают автомобили Toyota. Причины такой популярности очевидны —
              компания славится безупречной репутацией и беспрерывным
              совершенствованием как производственных процессов, так и
              бизнес-процессов.
            </p>
            <p className="mt-4">
              Но закрепим наиболее важные для наших корпоративных клиентов
              моменты, которые служат отправной точкой для выбора и становятся
              определяющими для устойчивой лояльности к бренду.
            </p>
            <h3 className="mt-6 font-bold text-xl">Почему модели Toyota</h3>
            <p className="">
              • Привлекательная стоимость. Наши модели отличает низкая
              совокупная стоимость владения при высокой стоимости на вторичном
              рынке, что минимизирует затраты на обновление автопарка.
            </p>
            <p className="">
              • Знаменитая надёжность. Это основополагающее качество вместе с
              характерной для Toyota долговечностью «закодировано» в ДНК бренда.
              Автомобили служат владельцам долго и верно.
            </p>
            <p className="">
              • Модельный ряд. Наши автомобили отвечают потребностям любого
              бизнеса. Универсальные и практичные седаны, мощные и выносливые
              внедорожники, коммерческий транспорт — каждый клиент найдёт
              оптимальный для себя вариант. Отдельно стоит упомянуть легендарный
              Hilux, испытанный в сложнейших экспедициях. Этот пикап —
              практически «неубиваемый» автомобиль.
            </p>
            <p className="">
              • Обширная география сервиса. Дилерская сеть Toyota Kazakhstan
              охватывает все регионы страны, предоставляя доступ к
              первоклассному сервису жителям разных городов, включая малые.
            </p>
            <p className="">
              • Гарантия качества. Все официальные дилерские и сервисные центры
              Toyota предлагают полный спектр услуг, придерживаясь принципа —
              удовлетворённость клиента прежде всего. Все процессы в ДЦ
              стандартизированы — соответствуют единым международным стандартам
              бренда.
            </p>
            <p className="">
              Если вас интересует аренда автомобилей для корпоративных клиентов,
              рекомендуем обратить внимание на программу Toyota Smart Rent и
              операционную аренду для владельцев бизнеса.
            </p>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-3xl text-center max-lg:text-2xl mb-20">
          МАШИННЫЙ РЯД
        </h2>
        <div className="grid gap-x-8 gap-y-4 grid-cols-3">
          <div>
            <img className="" src={one_2} alt="фото машины" />
            <p></p>
          </div>
          <div>
            <img className="" src={one_3} alt="фото машины" />
            <p></p>
          </div>
          <div>
            <img className="" src={one_4} alt="фото машины" />
            <p></p>
          </div>
          <div>
            <img className="" src={one_5} alt="фото машины" />
            <p></p>
          </div>
          <div>
            <img className="" src={one_6} alt="фото машины" />
            <p></p>
          </div>
          <div>
            <img className="" src={one_7} alt="фото машины" />
            <p></p>
          </div>
          <div>
            <img className="" src={one_8} alt="фото машины" />
            <p></p>
          </div>
          <div>
            <img className="" src={one_9} alt="фото машины" />
            <p></p>
          </div>
          <div>
            <img className="" src={one_10} alt="фото машины" />
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForBusinessPage;
