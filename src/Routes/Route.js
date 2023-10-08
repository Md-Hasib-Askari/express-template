/*
* Add all your Routes here and export them
*/

const router = require('express').Router();
const ModelController = require("../controllers/ModelController");

// Create
router.post("/create", ModelController.CreateTest);

// Read
router.get("/read", ModelController.ReadTest);
router.get("/read/:id", ModelController.ReadTestByID);

// Update
router.post("/update/:id", ModelController.UpdateTest);

// Delete
router.get("/delete/:id", ModelController.DeleteTest);



module.exports=router;