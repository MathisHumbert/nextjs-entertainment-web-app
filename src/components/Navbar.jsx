import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import MainLogoIcon from '../../assets/icons/MainLogoIcon';
import NavMoviesIcon from '../../assets/icons/NavMoviesIcon';
import NavBookmarkIcon from '../../assets/icons/NavBookmarkIcon';
import NavHomeIcon from '../../assets/icons/NavHomeIcon';
import NavTvSeriesIcon from '../../assets/icons/NavTvSeriesIcon';
import userImage from '../../assets/svg/image-avatar.png';

const Navbar = () => {
  const { pathname } = useRouter();
  const url = pathname.replace('/', '');

  return (
    <Wrapper>
      <MainLogoIcon />
      <div className='icons-container'>
        <Link href='/'>
          <NavHomeIcon isActive={url === 'home'} />
        </Link>
        <Link href='/movies'>
          <NavMoviesIcon isActive={url === 'movies'} />
        </Link>
        <Link href='/tv-series'>
          <NavTvSeriesIcon isActive={url === 'tv-series'} />
        </Link>
        <Link href='/bookmarked'>
          <NavBookmarkIcon isActive={url === 'bookmarked'} />
        </Link>
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
