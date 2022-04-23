import { ObjectId } from 'mongodb';
import { connectToDatabase } from '../../../services/mongodb';

export default async function handler(req, res) {
  const {
    method,
    query: { id },
    body: { userId },
  } = req;
  console.log(method);

  const { db } = await connectToDatabase();

  if (method === 'POST') {
    try {
      await db
        .collection('bookmarked')
        .insertOne({ movieId: ObjectId(id), userId: ObjectId(userId) });
      res.status(200).json({ message: 'added to bookmarked' });
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === 'DELETE') {
    try {
      await db
        .collection('bookmarked')
        .findOneAndDelete({ movieId: ObjectId(id) });
      res.status(200).json({ message: 'deleted from bookmarked' });
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
