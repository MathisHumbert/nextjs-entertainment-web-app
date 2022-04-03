// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
// http://localhost:3000/api/home

import { data } from '../../data';

export default function handler(req, res) {
  const trendingMovies = [];
  const recommendedMovies = [];

  data.forEach((item) => {
    if (item.isTrending) trendingMovies.push(item);
    else recommendedMovies.push(item);
  });

  res.status(200).json({ trendingMovies, recommendedMovies });
}
