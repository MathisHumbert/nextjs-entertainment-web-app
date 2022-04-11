import React from 'react';
import styled from 'styled-components';

import SearchIcon from '../../assets/icons/SearchIcon';
import { useAppContext } from '../context/appContext';

const SearchInput = () => {
  const { filterData, inputValue } = useAppContext();

  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <SearchIcon />
      <input
        type='text'
        placeholder='Search for movies or TV series'
        value={inputValue}
        onChange={(e) => filterData(e.target.value)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  gap: 1rem;
`;
export default SearchInput;
