import mongoose from 'mongoose';

const connect = async (): Promise<void> => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  const uri: string = process.env.DB_URI || 'mongodb://localhost:27017/clicked';
  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.log('MongoDB successfully connected'))
    .catch((err) => console.log(err));
};

export const testConnect = async (dbName: string): Promise<void> => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  const uri: string = 'mongodb://localhost:27017/' + dbName;
  return mongoose
    .connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.log('MongoDB successfully connected'))
    .catch((err) => console.log(err));
};

export const disconnect = async (): Promise<void> => {
  if (mongoose.connection.readyState >= 1) {
    await mongoose.disconnect();
  }
};

export const clear = async (): Promise<void> => {
  if (mongoose.connection.readyState >= 1) {
    await mongoose.connection.dropDatabase();
  }
};

export default connect;
