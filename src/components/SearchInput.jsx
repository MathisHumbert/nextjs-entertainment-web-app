import React from 'react';
import styled from 'styled-components';

import SearchIcon from '../../assets/icons/SearchIcon';
import { useAppContext } from '../context/appContext';

const SearchInput = ({ placeholder }) => {
  const { filterData, inputValue } = useAppContext();

  return (
    <Wrapper onSubmit={(e) => e.preventDefault()}>
      <SearchIcon />
      <input
        type='text'
        placeholder={placeholder}
        value={inputValue}
        onChange={(e) => filterData(e.target.value)}
      />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  gap: 1rem;
  align-items: center;

  input {
    border-bottom: 1px solid transparent;
    transition: border-color 0.3s linear;
  }

  input:focus {
    border-color: #5a698f;
  }

  @media (min-width: 768px) {
    input {
      font-size: 24px;
      line-height: 30px;
    }
  }
`;
export default SearchInput;
