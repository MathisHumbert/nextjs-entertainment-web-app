import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { smallTrendingImages, largeTrendingImages } from '../../assets';
import MovieInfos from './MovieInfos';
import BookmarkButton from './BookmarkButton';

const TrendingMovieCard = ({ title, year, category, rating }) => {
  return (
    <Wrapper>
      <div className='img-container'>
        <Image
          src={smallTrendingImages[title]}
          alt={title}
          layout='intrinsic'
        />
        <div className='infos-container'>
          <MovieInfos
            year={year}
            category={category}
            rating={rating}
            title={title}
          />
        </div>
        <BookmarkButton />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  height: 140px;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.0001) 0%,
    rgba(0, 0, 0, 0.75) 100%
  );

  .img-container {
    width: 100%;
    height: 100%;
    position: absolute;
  }

  .infos-container {
    position: absolute;
    bottom: 16px;
    left: 16px;
  }
`;

export default TrendingMovieCard;
