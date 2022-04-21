import React, { useEffect } from 'react';
import Head from 'next/head';

import { useAppContext } from '../context/appContext';
import Navbar from '../components/Navbar';
import SearchInput from '../components/SearchInput';
import MoviesList from '../components/MoviesList';
import { MainContainer, SecondaryContainer } from '../styles/components';
import { connectToDatabase } from '../services/mongodb';

const TvSeries = ({ serverData }) => {
  const { data, inputValue, setDataOnMount } = useAppContext();

  useEffect(() => {
    setDataOnMount(serverData);
  }, [serverData]);

  return (
    <>
      <Head>
        <title>Movies</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <MainContainer>
        <Navbar />

        <SecondaryContainer>
          <SearchInput placeholder={'Search for TV series'} />
          {inputValue ? (
            <MoviesList
              data={data}
              title={`Found ${data.length > 0 ? data.length : 'no'} result${
                data.length > 1 ? 's' : ''
              } for '${inputValue}'`}
            />
          ) : (
            <MoviesList data={serverData} title='TV Series' />
          )}
        </SecondaryContainer>
      </MainContainer>
    </>
  );
};

export async function getServerSideProps(context) {
  const { db } = await connectToDatabase();
  const serverData = await db.collection('movies').find().toArray();

  return {
    props: {
      serverData: serverData
        .filter((item) => item.category === 'TV Series')
        .map((item) => ({
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

export default TvSeries;
