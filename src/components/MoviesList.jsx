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
    display: grid;
    grid-template-columns: repeat(2, minmax(164px, 1fr));
    gap: 1rem 15px;
    margin-top: 24px;
  }

  @media (min-width: 768px) {
    margin-top: 33px;
    .container {
      grid-template-columns: repeat(3, minmax(220px, 1fr));
      gap: 24px 30px;
    }
  }

  @media (min-width: 1440px) {
    .container {
      margin-top: 32px;
      grid-template-columns: repeat(4, minmax(280px, 1fr));
    }
  }
`;
export default MoviesList;
