import mongoose from 'mongoose';

const connection = {};

const dbConnection = async () => {
  if (connection.isConnected) {
    return;
  }

  const db = await mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
  });

  connection.isConnected = db.connections[0].readyState;
};

export default dbConnection;
