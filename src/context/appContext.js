import React, { useContext, useState, createContext, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [stockData, setStockData] = useState([]);
  const [fetchData, setFetchData] = useState([]);
  const [bookmarkedUser, setBookmarkedUser] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [alertLogin, setAlertLogin] = useState({
    message: '',
    type: '',
  });

  const updateData = (id, value) => {
    if (value) {
      setBookmarkedUser(bookmarkedUser.filter((item) => item !== id));
    } else {
      setBookmarkedUser([...bookmarkedUser, id]);
    }
  };

  const filterData = (value) => {
    setInputValue(value);
    const newData = stockData.filter((item) => item.title.includes(value));
    setData(newData);
  };

  const setDataOnMount = (serverData, bookmarked) => {
    setData(serverData);
    setStockData(serverData);
    setBookmarkedUser(bookmarked);
  };

  const displayAlertLogin = ({ type, message }) => {
    setAlertLogin({ message, type });
    setTimeout(() => {
      setAlertLogin({ message: '', type: '' });
    }, 3000);
  };

  return (
    <AppContext.Provider
      value={{
        data,
        updateData,
        filterData,
        inputValue,
        setDataOnMount,
        fetchData,
        alertLogin,
        displayAlertLogin,
        bookmarkedUser,
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
