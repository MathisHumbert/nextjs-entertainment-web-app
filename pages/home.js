import React, { useEffect, useState } from 'react';
import Head from 'next/head';

import Navbar from '../components/Navbar';
import SearchInput from '../components/SearchInput';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('/api/movies');
      const data = await response.json();
      setTrendingMovies(data.trendingMovies);
      setRecommendedMovies(data.recommendedMovies);
    };

    fetchData();
  }, []);

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <Navbar />
        <main>
          <SearchInput />
        </main>
      </div>
    </div>
  );
};

export default Home;
