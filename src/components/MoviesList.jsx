import React from 'react';
import styled from 'styled-components';

import BasicMovieCard from './BasicMovieCard';

const MoviesList = ({ data, title }) => {
  return (
    <Wrapper>
      <h2>{title}</h2>
      <div className='container'>
        {data.map((movie) => (
          <BasicMovieCard key={movie.title} {...movie} />
        ))}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 24px;

  .container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    margin-top: 24px;
  }
`;
export default MoviesList;
