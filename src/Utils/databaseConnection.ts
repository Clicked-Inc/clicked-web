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
export default connect;
