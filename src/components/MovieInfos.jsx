import React from 'react';
import styled from 'styled-components';

import CategoryTvSeriesIcon from '../../icons/CategoryTvSeriesIcon';
import CategoryMovieIcon from '../../icons/CategoryMovieIcon';

const MovieInfos = ({ year, category, rating, title, bigTitle }) => {
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
      {bigTitle ? <h3>{title}</h3> : <h4>{title}</h4>}
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
    align-items: center;
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

  @media (min-width: 768px) {
    .movie-infos-container {
      gap: 8px;
    }

    .category-container {
      gap: 6px;
    }

    .dot {
      width: 3px;
      height: 3px;
    }
  }
`;

export default MovieInfos;
