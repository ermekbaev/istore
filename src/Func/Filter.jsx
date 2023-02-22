import React, { useState } from "react";

const Filter = () => {
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  const handleFilterSelect = (filter) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter((item) => item !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  useEffect(() => {
    // apply selected filters to original data and update filtered data
  }, [selectedFilters]);

  return (
    <div className="bg-gray-100 rounded p-4">
      <h2 className="text-lg font-medium mb-2">Filter by:</h2>
      <ul>
        <li>
          <button
            className={`py-1 px-2 rounded-full ${
              selectedFilters.includes("filter1")
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleFilterSelect("filter1")}
          >
            Filter 1
          </button>
        </li>
        <li>
          <button
            className={`py-1 px-2 rounded-full ${
              selectedFilters.includes("filter2")
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleFilterSelect("filter2")}
          >
            Filter 2
          </button>
        </li>
        <li>
          <button
            className={`py-1 px-2 rounded-full ${
              selectedFilters.includes("filter3")
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-gray-700"
            }`}
            onClick={() => handleFilterSelect("filter3")}
          >
            Filter 3
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Filter;
