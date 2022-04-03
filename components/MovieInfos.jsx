import React from 'react';
import styled from 'styled-components';

import CategoryTvSeriesIcon from '../assets/icons/CategorytvSeriesIcon';
import CategoryMovieIcon from '../assets/icons/CategoryMovieIcon';

const MovieInfos = ({ year, category, rating, title }) => {
  return (
    <Wrapper>
      <div className='movie-infos-container'>
        <p>{year}</p>
        <span className='dot'></span>
        <div className='category-container'>
          {category === 'Movie' ? (
            <CategoryMovieIcon />
          ) : (
            <CategoryTvSeriesIcon />
          )}
          <p>{category}</p>
        </div>
        <span className='dot'></span>
        <p>{rating}</p>
      </div>
      <h4 className='title'>{title}</h4>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  .movie-infos-container {
    display: flex;
    align-items: center;
    gap: 6px;
    margin-top: 8px;
  }

  .category-container {
    display: flex;
    gap: 4px;
  }

  p {
    color: rgba(255, 255, 255, 0.75);
  }

  .dot {
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
  }
`;

export default MovieInfos;
