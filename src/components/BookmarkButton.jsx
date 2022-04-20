import React, { useState } from 'react';
import styled from 'styled-components';

import EmptyBookmarkIcon from '../../assets/icons/EmptyBookmarkIcon';
import FullBookmarkIcon from '../../assets/icons/FullBookmarkIcon';

const BookmarkButton = ({ isBookmarked, onClick }) => {
  const [isActive, setIsActive] = useState(false);

  return (
    <Wrapper
      onClick={onClick}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      {isBookmarked ? (
        <FullBookmarkIcon isActive={isActive} />
      ) : (
        <EmptyBookmarkIcon isActive={isActive} />
      )}
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
  background: rgba(16, 20, 30, 0.5);
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 10;
  line-height: 0;
  cursor: pointer;
  transition: background 0.3s linear;

  &:hover {
    background: #fff;
  }

  @media (min-width: 768px) {
    top: 16px;
    right: 16px;
  }
`;

export default BookmarkButton;
