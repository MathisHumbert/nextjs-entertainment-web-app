import mongoose from 'mongoose';

const MovieSchema = new mongoose.Schema({
  title: String,
  year: Number,
  category: String,
  rating: String,
  isBookmarked: Boolean,
  isTrending: Boolean,
});

const Movie = mongoose.models.Movie || mongoose.model('Movie', MovieSchema);

export default Movie;
