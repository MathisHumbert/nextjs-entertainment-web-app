import React from 'react';
import styled from 'styled-components';

import EmptyBookmarkIcon from '../../assets/icons/EmptyBookmarkIcon';
import FullBookmarkIcon from '../../assets/icons/FullBookmarkIcon';

const BookmarkButton = ({ isBookmark, setIsBookmark }) => {
  return (
    <Wrapper onClick={setIsBookmark}>
      {isBookmark ? <FullBookmarkIcon /> : <EmptyBookmarkIcon />}
    </Wrapper>
  );
};

const Wrapper = styled.button`
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 50%;
  background-color: rgba(16, 20, 30, 0.5);
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 1;
  line-height: 0;
`;

export default BookmarkButton;
