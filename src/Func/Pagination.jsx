import React, { useEffect, useState } from "react";
import { useProducts } from "../Contexts/ProductContextProvider";
import { useSearchParams } from "react-router-dom";

const Pagination = () => {
  const { getProducts, pages } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [currentPage, setCurrentPage] = useState(1);

  function getPagesCount() {
    let pageCountArr = [];

    for (let i = 1; i <= pages; i++) {
      pageCountArr.push(i);
    }

    return pageCountArr;
  }

  const handlePreviousPage = () => {
    if (currentPage - 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage + 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  useEffect(() => {
    getProducts();
    // make API request for data on current page
  }, []);

  useEffect(() => {
    setSearchParams({
      page: currentPage,
    });
  }, [currentPage]);

  useEffect(() => {
    getProducts();
  }, [searchParams]);

  return (
    <div className="bg-gray-100 rounded-full flex items-center px-4 py-2 mu">
      <button
        className="bg-gray-200 text-gray-700 rounded-full py-2 px-4 mr-2"
        onClick={handlePreviousPage}
      >
        Previous
      </button>
      <div className="flex items-center justify-center w-16">
        {getPagesCount().map((item) => item === currentPage && item)}
      </div>
      <button
        className="bg-gray-200 text-gray-700 rounded-full py-2 px-4 ml-2"
        onClick={handleNextPage}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;

// Создайте компонент Pagination, который будет отображать список страниц и кнопки для перехода на предыдущую и следующую страницы. В этом компоненте вы можете также обрабатывать события нажатия на кнопки.
// Используйте хук состояния useState для хранения текущего номера страницы и общего количества страниц.
// Используйте хук useEffect для обработки изменения значения текущего номера страницы и загрузки соответствующих данных для этой страницы. В функции эффекта вы можете использовать асинхронный запрос на сервер для получения данных.
// Визуально оформите Pagination с помощью стилей Tailwind. Вы можете использовать классы стилей, чтобы изменить цвет фона, размер шрифта, цвет кнопок и другие параметры в соответствии с вашими предпочтениями.
