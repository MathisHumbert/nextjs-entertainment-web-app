import React from 'react';

import BasicMovieImage from './BasicMovieImage';
import MovieInfos from './MovieInfos';

const BasicMovieCard = ({
  title,
  year,
  category,
  rating,
  isBookmarked,
  _id,
}) => {
  return (
    <article>
      <BasicMovieImage title={title} id={_id} isBookmarked={isBookmarked} />
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
