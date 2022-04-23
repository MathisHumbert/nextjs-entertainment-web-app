import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import MainLogoIcon from '../../icons/MainLogoIcon';
import NavMoviesIcon from '../../icons/NavMoviesIcon';
import NavBookmarkIcon from '../../icons/NavBookmarkIcon';
import NavHomeIcon from '../../icons/NavHomeIcon';
import NavTvSeriesIcon from '../../icons/NavTvSeriesIcon';
import userImage from '../../assets/user.png';

const Navbar = () => {
  const { pathname } = useRouter();
  const url = pathname.replace('/', '');

  return (
    <Wrapper>
      <Link href='/' passHref>
        <a>
          <MainLogoIcon />
        </a>
      </Link>

      <div className='icons-container'>
        <Link href='/' passHref>
          <a>
            <NavHomeIcon active={url === ''} />
          </a>
        </Link>
        <Link href='/movies' passHref>
          <a>
            <NavMoviesIcon active={url === 'movies'} />
          </a>
        </Link>
        <Link href='/tv-series' passHref>
          <a>
            <NavTvSeriesIcon active={url === 'tv-series'} />
          </a>
        </Link>
        <Link href='/bookmarked' passHref>
          <a>
            <NavBookmarkIcon active={url === 'bookmarked'} />
          </a>
        </Link>
      </div>
      <div className='image-container' onClick={() => signOut()}>
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
    cursor: pointer;
  }

  @media (min-width: 768px) {
    height: 72px;
    padding: 0 24px;
    margin: 23px 25px 0;
    border-radius: 10px;

    .image-container {
      width: 32px;
      height: 32px;
    }

    .icons-container {
      gap: 32px;
    }
  }

  @media (min-width: 1440px) {
    padding: 32px 28px;
    margin: 32px 0 32px 32px;
    width: 96px;
    height: 960px;
    flex-direction: column;
    position: relative;

    .icons-container {
      flex-direction: column;
      position: absolute;
      top: 136px;
      gap: 40px;
    }

    .image-container {
      width: 40px;
      height: 40px;
    }
  }
`;
export default Navbar;
