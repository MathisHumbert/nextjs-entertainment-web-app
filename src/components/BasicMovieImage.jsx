import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import axios from 'axios';

import { useAppContext } from '../context/appContext';
import BookmarkButton from './BookmarkButton';
import {
  smallRegularImages,
  mediumRegularImages,
  largeRegularImages,
} from '../../assets';
import PlayButton from './PlayButton';

const BasicMovieImage = ({ title, isBookmarked, id }) => {
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
      <PlayButton />
      <div className='small-img-container'>
        <Image
          src={smallRegularImages[title]}
          alt={title}
          layout={'responsive'}
        />
      </div>
      <div className='medium-img-container'>
        <Image
          src={mediumRegularImages[title]}
          alt={title}
          layout={'responsive'}
        />
      </div>
      <div className='large-img-container'>
        <Image
          src={largeRegularImages[title]}
          alt={title}
          layout={'responsive'}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: fit-content;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5));
    z-index: -20;
  }

  .play-btn {
    display: none;
  }

  .medium-img-container,
  .large-img-container {
    display: none;
  }

  &:hover {
    .play-btn {
      display: flex;
    }

    &::after {
      z-index: 2;
    }
  }

  @media (min-width: 768px) {
    .medium-img-container {
      display: block;
    }

    .small-img-container {
      display: none;
    }
  }

  @media (min-width: 1440px) {
    .medium-img-container {
      display: none;
    }

    .large-img-container {
      display: block;
    }
  }
`;
export default BasicMovieImage;
