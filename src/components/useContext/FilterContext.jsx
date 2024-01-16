import  { createContext, useContext, useState } from 'react';

const FilterContext = createContext();

// eslint-disable-next-line react/prop-types
export const FilterContextProvider = ({ children }) => {
  const [selectedGenre, setSelectedGenre] = useState('');

  const handleGenreClick = (genre) => {
    setSelectedGenre(genre);
  };

  

  const contextValue = {
    selectedGenre,
    handleGenreClick,
    setValues: (genre) => {
      setSelectedGenre(genre);
    },
  };

  return (
    <FilterContext.Provider value={contextValue}>
      {children}
    </FilterContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useFilterContext = () => {
  return useContext(FilterContext);
};