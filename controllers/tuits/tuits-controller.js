import posts from "./tuits.js";
let tuits = posts;

const TuitsController = (app) => {
 app.post('/api/tuits', createTuit);
 app.get('/api/tuits', findTuits);
 app.put('/api/tuits/:tid', updateTuit);
 app.delete('/api/tuits/:tid', deleteTuit);
}


const createTuit = (req, res) => {
    const newTuit = req.body;
    newTuit._id = (new Date()).getTime()+'';
    newTuit.likes = 0;
    newTuit.liked = false;
    newTuit.unlikes = 0;
    tuits.push(newTuit);
    res.json(newTuit);
  }
  

const findTuits = (req, res) => {
    res.json(tuits);
}

const updateTuit = (req, res) => {
    const tuitdIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitIndex = tuits.findIndex(
      (t) => t.id === tuitdIdToUpdate)
    tuits[tuitIndex] = 
      {...tuits[tuitIndex], ...updates};
    res.sendStatus(200);
  }
  
// const updateTuit = (req, res) => {
//     const tuitId = req.params['tid'];
//     const updates = req.body;
//     tuits = tuits.map((tuit) =>
//     tuit.id === tuitId ?
//         {...tuit, ...updates} :
//         tuit
//     );
//     res.sendStatus(200);
// }
const deleteTuit = (req, res) => {
    const tuitId = req.params['tid'];
    tuits = tuits.filter(
        tuit => tuit.id !== tuitId
    )

    res.sendStatus(200)
}

export default TuitsController;