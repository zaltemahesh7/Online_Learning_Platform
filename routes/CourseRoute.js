const express = require("express");
const router = express.Router();
const Course = require("../models/Course/Course");

// Create a Course
router.post("/courses", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(201).send(course);
  } catch (error) {
    console.log("Error");
    
    res.status(400).send(error);
  }
});

// Get all Courses
router.get("/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.status(200).send(courses);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get Course by ID
router.get("/courses/:id", async (req, res) => {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).send();
    }
    res.status(200).send(course);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Course
router.put("/courses/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!course) {
      return res.status(404).send();
    }
    res.status(200).send(course);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete Course
router.delete("/courses/:id", async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);
    if (!course) {
      return res.status(404).send();
    }
    res.status(200).send(course);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
