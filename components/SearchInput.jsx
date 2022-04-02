import React from 'react';
import styled from 'styled-components';
import SearchIcon from '../assets/icons/SearchIcon';

const SearchInput = () => {
  return (
    <Wrapper>
      <SearchIcon />
      <input type='text' placeholder='Search for movies or TV series' />
    </Wrapper>
  );
};

const Wrapper = styled.form`
  display: flex;
  gap: 1rem;
`;
export default SearchInput;
