import mongoose from 'mongoose';
const tuitsSchema = new mongoose.Schema({
  topic: String,
  username: String,
  handle: String,
  time: String,
  image: String,
  title: String,
  tuit: String,
  likes: Number,
  liked: Boolean,
  unlikes: Number,
  replies: Number,
  retuits: Number
}, {collection: 'tuits'});

export default tuitsSchema;