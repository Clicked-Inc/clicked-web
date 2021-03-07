import mongoose from 'mongoose';

const connect = async (): Promise<void> => {
  if (mongoose.connection.readyState >= 1) {
    return;
  }
  return mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    })
    .then(() => console.log('MongoDB successfully connected'))
    .catch((err) => console.log(err));
};
export default connect;
