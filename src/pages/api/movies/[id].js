import Movie from '../../../models/Movie';
import dbConnection from '../../../services/dbConnection';

dbConnection();

const handler = async (req, res) => {
  const { method } = req;
  const { id } = req.query;

  switch (method) {
    case 'PUT':
      try {
        const { isBookmarked } = req.body;
        const movie = await Movie.findOneAndUpdate(
          { _id: id },
          { isBookmarked }
        );
        res.status(200).json({ sucess: true, data: movie });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
  }
};

export default handler;
