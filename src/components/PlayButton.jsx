import React from 'react';
import styled from 'styled-components';

import PlayIcon from '../../assets/icons/PlayIcon';

const PlayButton = () => {
  return (
    <Wrapper className='play-btn'>
      <PlayIcon />
      <h4>Play</h4>
    </Wrapper>
  );
};

const Wrapper = styled.button`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  display: flex;
  align-items: center;
  gap: 19px;
  padding: 9px 24px 9px 9px;
  border: 0;
  border-radius: 28.5px;
  background: rgba(255, 255, 255, 0.25);
  color: #fff;
  cursor: pointer;
`;
export default PlayButton;
