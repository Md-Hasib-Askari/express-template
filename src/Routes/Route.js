/*
* Add all your Routes here and export them
*/

const router = require('express').Router();
const StudentController = require("../Controllers/StudentController");

// Create
router.post("/addStudent", StudentController.register);

// Read
router.get("/allStudents", StudentController.getStudents);
router.get("/allStudents/:id", StudentController.getStudentByID);

// Update
router.post("/addStudent/:id", StudentController.updateStudent);

// Delete
router.get("/deleteStudent/:id", StudentController.deleteStudent);



module.exports=router;