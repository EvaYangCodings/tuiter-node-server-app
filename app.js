import express from 'express';
import HelloController from './controllers/hello-controller.js'
import UserController from './controllers/users/users-controller.js';
import TuitsController from './controllers/tuits/tuits-controller.js';
import cors from 'cors';
import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost:27017/tuitter');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'))

HelloController(app);
UserController(app);
TuitsController(app);
app.listen(process.env.PORT || 4000);