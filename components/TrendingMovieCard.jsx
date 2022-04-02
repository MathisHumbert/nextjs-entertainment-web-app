import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import { smallTrendingImages, largeTrendingImages } from '../assets';

const TrendingMovieCard = ({ title, thumbnail, year, category, rating }) => {
  console.log(title, smallTrendingImages[title]);
  return (
    <Wrapper>
      <div className='img-container'>
        <Image
          src={smallTrendingImages[title]}
          alt={title}
          layout='intrinsic'
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  min-width: 240px;
  min-height: 140px;
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
`;

export default TrendingMovieCard;
