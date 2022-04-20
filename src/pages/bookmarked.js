import React from 'react';
import Head from 'next/head';

import { useAppContext } from '../context/appContext';
import Navbar from '../components/Navbar';
import SearchInput from '../components/SearchInput';
import MoviesList from '../components/MoviesList';
import { MainContainer, SecondaryContainer } from '../styles/components';

const Bookmarked = () => {
  const { data, isLoading, isError, inputValue } = useAppContext();

  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MainContainer>
        <Navbar />
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Something went wrong</div>
        ) : (
          <SecondaryContainer>
            <SearchInput placeholder={'Search for bookmarked shows'} />
            {inputValue ? (
              <MoviesList
                data={data.filter((movie) => movie.isBookmarked === true)}
                title={`Found ${data.length > 0 ? data.length : 'no'} result${
                  data.length > 1 ? 's' : ''
                } for '${inputValue}'`}
              />
            ) : (
              <>
                <MoviesList
                  data={data.filter(
                    (movie) =>
                      movie.isBookmarked === true && movie.category === 'Movie'
                  )}
                  title='Bookmarked Movies'
                />
                <MoviesList
                  data={data.filter(
                    (movie) =>
                      movie.isBookmarked === true &&
                      movie.category === 'TV Series'
                  )}
                  title='Bookmarked TV Series'
                />
              </>
            )}
          </SecondaryContainer>
        )}
      </MainContainer>
    </>
  );
};

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const serverData = await db.collection('movies').find().toArray();
  console.log(serverData.length);

  return {
    props: {
      serverData: serverData.map((item) => ({
        _id: item._id.toString(),
        title: item.title,
        category: item.category,
        isBookmarked: item.isBookmarked,
        isTrending: item.isTrending,
        rating: item.rating,
        year: item.year,
      })),
    },
  };
}

export default Bookmarked;
