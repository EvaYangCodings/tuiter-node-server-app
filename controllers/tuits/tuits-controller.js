// import posts from "./tuits.js";
import * as tuitsDao from './tuits-dao.js';
// let tuits = posts;


const createTuit = async (req, res) => {
  // const newTuit = req.body;
  // newTuit.likes = 0;
  // newTuit.liked = false;
  // const insertedTuit = await tuitsDao.createTuit(newTuit);
  // res.json(insertedTuit);
  const tuit = req.body;
  const newTuit = await tuitsDao.createTuit(tuit);
  newTuit.likes = 0;
  newTuit.liked = false;
  newTuit.unlikes = 0;
  newTuit.replies = 0;
  newTuit.retuits = 0;
  res.json(newTuit);
}

const findTuits = async (req, res) => {
  const tuits = await tuitsDao.findTuits();
  res.json(tuits);
}

const updateTuit = async (req, res) => {
  const tuitIdToUpdate = req.params.tid;
  const updates = req.body;
  const status = await tuitsDao.updateTuit(tuitIdToUpdate, updates);
  res.json(status);
}

const deleteTuit = async (req, res) => {
  const tuitIdToDelete = req.params.tid;
  const status = await tuitsDao.deleteTuit(tuitIdToDelete);
  res.json(status);
}
const TuitsController = (app) => {
  app.post('/api/tuits', createTuit);
  app.get('/api/tuits', findTuits);
  app.put('/api/tuits/:tid', updateTuit);
  app.delete('/api/tuits/:tid', deleteTuit);
}

export default TuitsController;