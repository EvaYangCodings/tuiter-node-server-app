import mongoose from 'mongoose';
import {Schema} from 'mongoose';

const schema = mongoose.Schema({
  tuit: String,
  likes: Number,
  liked: Boolean,
}, {collection: 'tuits'});

export default schema;