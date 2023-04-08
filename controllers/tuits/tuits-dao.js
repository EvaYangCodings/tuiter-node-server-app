import tuitsModel from './tuits-model.js';

export const findTuits = async() => {
    const tuits = await tuitsModel.find();
    return tuits;
}

export const createTuit = async(tuit) =>{
    const newTuit = await tuitsModel.create(tuit);
    return newTuit;
} 

export const deleteTuit = async (tid) => {
    const status = await tuitsModel.deleteOne({_id: tid});
    return status;
}
export const updateTuit = async (tid, tuit) => {
    const status = await tuitsModel.updateOne({_id: tid}, tuit);
    return status;
}
