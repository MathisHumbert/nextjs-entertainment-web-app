import React, { useState } from 'react';
import Image from 'next/image';
import styled from 'styled-components';
import axios from 'axios';

import { useAppContext } from '../context/appContext';
import { smallTrendingImages, largeTrendingImages } from '../../assets';
import MovieInfos from './MovieInfos';
import BookmarkButton from './BookmarkButton';

const TrendingMovieCard = ({
  title,
  year,
  category,
  rating,
  isBookmarked,
  _id: id,
}) => {
  const [isActive, setIsActive] = useState(isBookmarked);
  const { updateData } = useAppContext();

  const onClick = async () => {
    await axios.put(`/api/movies/${id}`, {
      isBookmarked: !isActive,
    });
    updateData(id, !isActive);
    setIsActive(!isActive);
  };

  return (
    <Wrapper>
      <BookmarkButton isBookmarked={isActive} onClick={onClick} />
      <div className='small-img-container'>
        <Image
          src={smallTrendingImages[title]}
          alt={title}
          layout={'responsive'}
        />
      </div>
      <div className='large-img-container'>
        <Image
          src={largeTrendingImages[title]}
          alt={title}
          layout={'responsive'}
        />
      </div>
      <div className='infos-container'>
        <MovieInfos
          year={year}
          category={category}
          rating={rating}
          title={title}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  width: 100%;
  height: 200%;
  position: relative;
  border-radius: 8px;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    width: 100%;
    height: 50%;
    background: linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.0001) 0%,
      rgba(0, 0, 0, 0.75) 100%
    );
    z-index: 1;
  }

  .infos-container {
    position: absolute;
    bottom: 16px;
    left: 16px;
    z-index: 12;
  }

  .large-img-container {
    display: none;
  }

  @media (min-width: 768px) {
    .img-container {
      max-height: 230px;
    }

    .large-img-container {
      display: block;
    }

    .small-img-container {
      display: none;
    }
  }
`;

export default TrendingMovieCard;
