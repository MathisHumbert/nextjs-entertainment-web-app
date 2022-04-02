import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

import MainLogo from '../assets/icons/MainLogo';
import NavMovies from '../assets/icons/NavMovies';
import NavBookmark from '../assets/icons/NavBookmark';
import NavHome from '../assets/icons/NavHome';
import NavTvSeries from '../assets/icons/NavTvSeries';
import userImage from '../assets/svg/image-avatar.png';

const Navbar = () => {
  return (
    <Wrapper>
      <MainLogo pointer />
      <div className='icons-container'>
        <NavHome pointer />
        <NavMovies pointer />
        <NavTvSeries pointer />
        <NavBookmark pointer />
      </div>
      <div className='image-container'>
        <Image src={userImage} alt='user' />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 56px;
  padding: 0 16px;
  background: #161d2f;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .icons-container {
    display: flex;
    gap: 24px;
  }

  .image-container {
    width: 24px;
    height: 24px;
    border: 1px solid #fff;
    border-radius: 50%;
  }
`;
export default Navbar;
