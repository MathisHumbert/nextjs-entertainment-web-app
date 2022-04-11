import React, { useContext, useState, createContext, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    setIsLoading(true);
    setIsError(false);

    try {
      const response = await fetch('/api/movies');
      const data = await response.json();
      setData(data.data);
      setStockData(data.data);
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  const updateData = (id, value) => {
    const index = data.findIndex((item) => item._id === id);
    data[index].isBookmarked = value;
    stockData[index].isBookmarked = value;
  };

  const filterData = (value) => {
    setInputValue(value);
    const newData = stockData.filter((item) => item.title.includes(value));
    setData(newData);
  };

  return (
    <AppContext.Provider
      value={{ data, isLoading, isError, updateData, filterData, inputValue }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
