import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import BookmarkButton from './BookmarkButton';
import { smallRegularImages } from '../assets';

const BasicMovieImage = ({ title, isBookmark, setIsBookmark }) => {
  return (
    <Wrapper>
      <BookmarkButton isBookmark={isBookmark} setIsBookmark={setIsBookmark} />
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
