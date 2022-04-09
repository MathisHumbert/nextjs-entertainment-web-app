import React from 'react';
import Head from 'next/head';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

import { useAppContext } from '../context/appContext';
import Navbar from '../components/Navbar';
import SearchInput from '../components/SearchInput';
import TrendingMovieCard from '../components/TrendingMovieCard';
import MoviesList from '../components/MoviesList';

import { BasicSection, MainContainer } from '../styles/components';

const Home = () => {
  const { data, isLoading, isError } = useAppContext();

  return (
    <>
      <Head>
        <title>Home</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Navbar />
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Something went wrong</div>
        ) : (
          <MainContainer>
            <SearchInput />
            <BasicSection>
              <h2>Trending</h2>
              <Swiper
                slidesPerView={1}
                pagination={{ clickable: true }}
                style={{ marginTop: 24 }}
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
            </BasicSection>
            <MoviesList
              data={data.filter((movie) => movie.isTrending === false)}
              title='Recommended for you'
            />
          </MainContainer>
        )}
      </main>
    </>
  );
};

export default Home;
