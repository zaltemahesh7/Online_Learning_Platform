const express = require("express");
const router = express.Router();
const Trainer = require("../models/Trainer/Trainer");
const Course = require("../models/Course/Course");
const Review = require("../models/Reviews/Review");
const Group = require("../models/Group/Group");
const Question = require("../models/Questions/Question");
const Appointment = require("../models/Appointment/Appointment");
const Enquiry = require("../models/Appointment/Appointment");
const Product = require("../models/Product/Product");
const Event = require("../models/Event/Event");

// Get all data according to the trainer
router.get("/trainers/:id/data", async (req, res) => {
  try {
    const trainerId = req.params.id;

    // Find the trainer
    const trainer = await Trainer.findById(trainerId);
    if (!trainer) {
      return res.status(404).send({ message: "Trainer not found" });
    }

    // Find courses by the trainer
    const courses = await Course.find({ t_id: trainerId });
    // Find question by the trainer
    const question = await Question.find({ t_id: trainerId });
    // Find Appointment by the trainer
    const Appointments = await Appointment.find({ t_id: trainerId });
    // Find Enquiry by the trainer
    const Enquirys = await Enquiry.find({ t_id: trainerId });
    // Find Products by the trainer
    const Products = await Product.find({ t_id: trainerId });
    // Find Events by the trainer
    const Events = await Event.find({ t_id: trainerId });
    // console.log(courses.length);

    // Get reviews and groups for each course
    const courseIds = courses.map((course) => course._id);
    const reviews = await Review.find({ c_id: { $in: courseIds } });
    const groups = await Group.find({ c_id: { $in: courseIds } });

    res.status(200).send({
      trainer,
      courses,
      reviews,
      groups,
      question,
      Appointments,
      Enquirys,
      Products,
      Events,
    });
  } catch (error) {
    res.status(500).send({ message: "Server error", error });
  }
});

module.exports = router;
