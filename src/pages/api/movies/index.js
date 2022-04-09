import Movie from '../../../models/Movie';
import dbConnection from '../../../services/dbConnection';

dbConnection();

const handler = async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      try {
        const movies = await Movie.find({});
        res.status(200).json({ sucess: true, data: movies });
      } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, error });
      }
  }
};

export default handler;
