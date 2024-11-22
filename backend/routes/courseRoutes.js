const express = require("express");
const courseController = require("../controllers/courseController");
const router = express.Router();

// GET all courses (used for frontend rendering or API)
router.get("/", courseController.getCourses);

// POST a new course
router.post("/", courseController.createCourse);

// GET a new getCoursesAPI
router.get("/getCourse", courseController.getCoursesAPI);

module.exports = router;
