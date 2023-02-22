import React from "react";
import { useState, useEffect } from "react";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    setSearching(true);
  };

  useEffect(() => {
    if (searching) {
      // make API request for search results
      // update state with search results
      setSearching(false);
    }
  }, [searching]);

  return (
    <div className="bg-gray-100 rounded-full flex items-center px-4">
      <input
        className="bg-gray-100 rounded-full py-2 px-4 text-gray-700 leading-tight focus:outline-none"
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleInputChange}
      />
      <button
        className="ml-4 py-2 px-4 bg-blue-500 text-white rounded-full hover:bg-blue-700 focus:outline-none"
        onClick={handleSearch}
      >
        Search
      </button>
    </div>
  );
};
export default SearchBar;

// Создайте компонент SearchBar, который будет содержать текстовое поле ввода и кнопку для запуска поиска. В этом компоненте вы также можете обрабатывать события изменения текстового поля и нажатия на кнопку.
// Используйте хук состояния useState для хранения текущего значения текстового поля и состояния поиска (например, true для обозначения активного поиска или false для остановки поиска).
// Используйте хук useEffect для обработки изменения значения текстового поля и запуска поиска при нажатии на кнопку. В функции эффекта вы можете использовать асинхронный запрос на сервер для получения результатов поиска.
// Визуально оформите SearchBar с помощью стилей Tailwind. Вы можете использовать классы стилей, чтобы изменить цвет фона, ширину поля ввода, размер шрифта и другие параметры в соответствии с вашими предпочтениями.
