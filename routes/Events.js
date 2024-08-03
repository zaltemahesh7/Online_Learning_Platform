const express = require("express");
const router = express.Router();
const Event = require("../models/Event/Event");

// Create a new event
router.post("/events", async (req, res) => {
  try {
    const { event_name, event_date, event_description, t_id, event_image } =
      req.body;
    const newEvent = new Event({
      event_name,
      event_date,
      event_description,
      t_id,
      event_image,
    });
    await newEvent.save();
    res.status(201).send(newEvent);
  } catch (error) {
    res.status(400).send({ message: "Error creating event", error });
  }
});

// Get all events
router.get("/events", async (req, res) => {
  try {
    const events = await Event.find().populate("t_id");
    res.status(200).send(events);
  } catch (error) {
    res.status(500).send({ message: "Error fetching events", error });
  }
});

// Get events by trainer ID
router.get("/events/trainer/:t_id", async (req, res) => {
  try {
    const events = await Event.find({ t_id: req.params.t_id }).populate("t_id");
    res.status(200).send(events);
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error fetching events by trainer ID", error });
  }
});

module.exports = router;
