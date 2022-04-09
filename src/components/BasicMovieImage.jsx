import React, { useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import axios from 'axios';

import { useAppContext } from '../context/appContext';
import BookmarkButton from './BookmarkButton';
import { smallRegularImages } from '../../assets';

const BasicMovieImage = ({ title, isBookmarked, id }) => {
  const [isActive, setIsActive] = useState(isBookmarked);
  const { updateData } = useAppContext();

  const onClick = async () => {
    await axios.put(`/api/movies/${id}`, {
      isBookmarked: !isActive,
    });
    setIsActive(!isActive);
    updateData(id);
  };

  return (
    <Wrapper>
      <BookmarkButton isBookmarked={isActive} onClick={onClick} />
      <div className='small-img-container'>
        <Image src={smallRegularImages[title]} alt={title} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: 164px;
  height: 100px;
  border-radius: 8px;
  overflow: hidden;

  .small-img-container {
    width: 164px;
    height: 100px;
    z-index: 0;
    position: absolute;
  }
`;
export default BasicMovieImage;
