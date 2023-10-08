const testModel = require('../Models/Models');

// Create
exports.CreateTest = async (req, res) => {
    try {
        const reqBody = req.body;
        await testModel.create(reqBody);
        res.status(201).json({status:"success",data: reqBody});
    } catch (err) {
        res.status(400).json({status:"fail", data:err});
    }
}

// Read
exports.ReadTest = async (req,res) => {
    try {
        let data = await testModel.find();
        res.status(200).json({status:"success", data:data})
    } catch (err) {
        res.status(400).json({status:"fail", data:err})
    }
}

// Read By ID
exports.ReadTestByID = async (req,res) => {
    let id = req.params.id;
    let query = {_id:id};
    try {
        let data = await testModel.find(query);
        res.status(200).json({status:"success", data:data})
    } catch (err) {
        res.status(400).json({status:"fail", data:err})
    }
}


// Update
exports.UpdateTest = async (req,res) => {
    let id= req.params.id;
    let query={_id:id};
    let reqBody = req.body;
    try {
        let data = await testModel.updateOne(query,reqBody);
        res.status(200).json({status:"success", data:data});
    } catch (err) {
        res.status(400).json({status:"fail", data:err});
    }
}


// Delete
exports.DeleteTest = async (req,res) => {
    let id= req.params.id;
    let query={_id:id};
    try {
        let data = await testModel.deleteOne(query);
        res.status(200).json({status:"success",data:data})
    } catch (err) {
        res.status(400).json({status:"fail", data:err});
    }
}