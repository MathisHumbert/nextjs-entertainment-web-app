import React, { useContext, useState, createContext, useEffect } from 'react';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

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
      setIsLoading(false);
    } catch (error) {
      setIsError(true);
    }
  };

  const updateData = (id) => {
    const dataToUpdate = data.find((item) => item._id === id);
    dataToUpdate.isBookmarked = !dataToUpdate.isBookmarked;
  };

  return (
    <AppContext.Provider value={{ data, isLoading, isError, updateData }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useAppContext };
