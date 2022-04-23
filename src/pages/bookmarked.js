import React, { useEffect } from 'react';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
import { ObjectId } from 'mongodb';

import { useAppContext } from '../context/appContext';
import Navbar from '../components/Navbar';
import SearchInput from '../components/SearchInput';
import MoviesList from '../components/MoviesList';
import { MainContainer, SecondaryContainer } from '../styles/components';
import { connectToDatabase } from '../services/mongodb';

const Bookmarked = ({ serverData = [], serverBookmarked = [] }) => {
  const { data, inputValue, setDataOnMount, bookmarkedUser } = useAppContext();

  useEffect(() => {
    setDataOnMount(serverData, serverBookmarked);
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
          <SearchInput placeholder={'Search for bookmarked shows'} />
          {inputValue ? (
            <MoviesList
              data={data}
              title={`Found ${data.length > 0 ? data.length : 'no'} result${
                data.length > 1 ? 's' : ''
              } for '${inputValue}'`}
            />
          ) : (
            <>
              <MoviesList
                data={serverData.filter(
                  (movie) =>
                    movie.category === 'Movie' &&
                    bookmarkedUser.includes(movie._id)
                )}
                title='Bookmarked Movies'
              />
              <MoviesList
                data={serverData.filter(
                  (movie) =>
                    movie.category === 'TV Series' &&
                    bookmarkedUser.includes(movie._id)
                )}
                title='Bookmarked TV Series'
              />
            </>
          )}
        </SecondaryContainer>
      </MainContainer>
    </>
  );
};

export async function getServerSideProps(context) {
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/login',
      },
    };
  }

  const { db } = await connectToDatabase();
  const serverData = await db.collection('movies').find().toArray();
  const serverBookmarked = await db
    .collection('bookmarked')
    .find({ userId: ObjectId(session.id) })
    .toArray();

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
      serverBookmarked: serverBookmarked.map((item) => item.movieId.toString()),
    },
  };
}

export default Bookmarked;
