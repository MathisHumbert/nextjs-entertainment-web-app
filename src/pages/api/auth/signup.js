import { hash } from 'bcryptjs';
import { connectToDatabase } from '../../../services/mongodb';

export async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(422).json({ message: 'Invalid Data', success: false });
      return;
    }

    const { db } = await connectToDatabase();

    const checkExisting = await db
      .collection('users')
      .findOne({ email: email });
    if (checkExisting) {
      res.status(422).json({ message: 'User already exists', success: false });
      return;
    }

    await db.collection('users').insertOne({
      email,
      password: await hash(password, 12),
    });

    res.status(201).json({ success: true, message: 'User Created' });
  } else {
    res.status(500).json({ message: 'Route not valid' });
  }
}

export default handler;
