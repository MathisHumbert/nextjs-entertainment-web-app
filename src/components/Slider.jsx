import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/free-mode';

import TrendingMovieCard from './TrendingMovieCard';

const Slider = ({ data }) => {
  const [slidesPerView, setSlidesPerView] = useState(2);

  useEffect(() => {
    setSlidesPerView(window.innerWidth >= 1440 ? 3 : 2);
  }, []);

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize);

    return () => window.removeEventListener('resize', handleWindowResize);
  });

  const handleWindowResize = () => {
    const width = window.innerWidth;
    if (width >= 1440) {
      setSlidesPerView(3);
    } else {
      setSlidesPerView(2);
    }
  };

  return (
    <Wrapper>
      <h2>Trending</h2>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={16}
        freeMode={true}
        pagination={{ clickable: true }}
        modules={[Pagination, FreeMode]}
        className='swipper'
      >
        {data &&
          data
            .filter((movie) => movie.isTrending === true)
            .map((movie) => (
              <SwiperSlide key={movie.title}>
                <TrendingMovieCard {...movie} />
              </SwiperSlide>
            ))}
      </Swiper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 24px;

  .swipper {
    width: 100%;
    height: 100%;
    margin-top: 1rem;
    cursor: grab;
  }
`;
export default Slider;
