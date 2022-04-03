import React, { useState } from 'react';

import BasicMovieImage from './BasicMovieImage';
import MovieInfos from './MovieInfos';

const BasicMovieCard = ({ title, year, category, rating, isBookmarked }) => {
  const [isBookmark, setIsBookmark] = useState(isBookmarked);

  return (
    <article>
      <BasicMovieImage
        title={title}
        isBookmark={isBookmark}
        setIsBookmark={() => setIsBookmark(!isBookmark)}
      />
      <MovieInfos
        title={title}
        year={year}
        category={category}
        rating={rating}
      />
    </article>
  );
};

export default BasicMovieCard;
