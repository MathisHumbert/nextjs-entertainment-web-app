import React, { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import Navbar from '../components/Navbar';
import SearchInput from '../components/SearchInput';
import TrendingMovieCard from '../components/TrendingMovieCard';
import BasicMovieCard from '../components/BasicMovieCard';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [recommendedMovies, setRecommendedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setIsError(false);
      try {
        const response = await fetch('/api/home');
        const data = await response.json();

        setTrendingMovies(data.trendingMovies);
        setRecommendedMovies(data.recommendedMovies);
        setIsLoading(false);
      } catch (error) {
        setIsError(true);
      }
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
        {isLoading ? (
          <div>Loading...</div>
        ) : isError ? (
          <div>Something went wrong</div>
        ) : (
          <main>
            <SearchInput />
            {/* {trendingMovies.map((movie) => (
              <TrendingMovieCard key={movie.title} {...movie} />
            ))} */}
            <section>
              <h1>Recommended for you</h1>
              {recommendedMovies.map((movie) => (
                <BasicMovieCard key={movie.title} {...movie} />
              ))}
            </section>
          </main>
        )}
      </div>
    </div>
  );
};

export default Home;
