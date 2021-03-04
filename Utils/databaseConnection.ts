import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

async function connect() {
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
}
export default connect;
