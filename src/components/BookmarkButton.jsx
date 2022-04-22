import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import { useAppContext } from '../context/appContext';
import EmptyBookmarkIcon from '../../assets/icons/EmptyBookmarkIcon';
import FullBookmarkIcon from '../../assets/icons/FullBookmarkIcon';

const BookmarkButton = ({ isBookmarked, id }) => {
  const [isActive, setIsActive] = useState(isBookmarked);
  const [hover, setHover] = useState(false);
  const { updateData, setTriggerFetch } = useAppContext();

  const onClick = async () => {
    await axios.put(`/api/movies/${id}`, {
      isBookmarked: !isActive,
    });
    updateData(id, !isActive);
    setIsActive(!isActive);
    setTriggerFetch(true);
  };

  return (
    <Wrapper
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {isActive ? (
        <FullBookmarkIcon hover={hover} />
      ) : (
        <EmptyBookmarkIcon hover={hover} />
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
