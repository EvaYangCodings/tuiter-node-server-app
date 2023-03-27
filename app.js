import express from 'express';
import helloController from './controllers/hello-controller.js'
const app = express();

helloController(app);
app.listen(4000);