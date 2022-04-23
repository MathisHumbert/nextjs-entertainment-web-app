import React from 'react';

import BasicMovieImage from './BasicMovieImage';
import MovieInfos from './MovieInfos';

const BasicMovieCard = ({
  title,
  year,
  category,
  rating,
  isBookmarked,
  _id: id,
}) => {
  return (
    <article>
      <BasicMovieImage title={title} id={id} />
      <MovieInfos
        title={title}
        year={year}
        category={category}
        rating={rating}
        bigTitle={false}
      />
    </article>
  );
};

export default BasicMovieCard;
