import React from 'react';
import styled from 'styled-components';

import CategoryTvSeriesIcon from './CategorytvSeriesIcon';
import CategoryMovieIcon from './CategoryMovieIcon';

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
      <h1 className='title'>{title}</h1>
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
    font-size: 11px;
    font-weight: 300;
    line-height: 13.86px;
    color: rgba(255, 255, 255, 0.75);
  }

  .dot {
    width: 2px;
    height: 2px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
  }

  h1 {
    font-size: 14px;
    font-weight: 500;
    line-height: 18px;
    color: #fff;
    margin-top: 4px;
  }
`;

export default MovieInfos;
