import React, { useContext, useState, createContext, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [fetchData, setFetchData] = useState([]);
  const [triggerFetch, setTriggerFetch] = useState(false);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (triggerFetch) {
      const fetchData = async () => {
        try {
          const response = await fetch('/api/movies');
          const { data } = await response.json();
          setFetchData(data);
          setStockData(data);
          setTriggerFetch(false);
        } catch (error) {
          console.log(error);
        }
      };

      fetchData();
    }
  }, [triggerFetch]);

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

  const setDataOnMount = (serverData) => {
    setData(serverData);
    setStockData(serverData);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        updateData,
        filterData,
        inputValue,
        setDataOnMount,
        setTriggerFetch,
        fetchData,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
