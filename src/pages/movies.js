import React from 'react';
import Head from 'next/head';

import { useAppContext } from '../context/appContext';
import MoviesList from '../components/MoviesList';
import SearchInput from '../components/SearchInput';
import Navbar from '../components/Navbar';
import { MainContainer } from '../styles/components';

const Movies = () => {
  const { data, isLoading, isError } = useAppContext();

  return (
    <>
      <Head>
        <title>Movies</title>
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
            <MoviesList
              data={data.filter((movie) => movie.category === 'Movie')}
              title='Movies'
            />
          </MainContainer>
        )}
      </main>
    </>
  );
};

export default Movies;
