import { connectToDatabase } from '../../../services/mongodb';
import { hash } from 'bcryptjs';

export async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(422).json({ message: 'Invalid Data' });
      return;
    }

    const { db } = await connectToDatabase();

    const checkExisting = await db
      .collection('users')
      .findOne({ email: email });
    if (checkExisting) {
      res.status(422).json({ message: 'User already exists' });
      return;
    }

    const user = await db.collection('users').insertOne({
      email,
      password: await hash(password, 12),
    });

    res.status(201).json(user);
  } else {
    res.status(500).json({ message: 'Route not valid' });
  }
}

export default handler;
