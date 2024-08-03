const express = require("express");
const router = express.Router();
const Trainer = require("../models/Trainer/Trainer");

// Create a Trainer
router.post("/trainers", async (req, res) => {
  try {
    const trainer = new Trainer(req.body);
    await trainer.save();
    res.status(201).send(trainer);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all Trainers
router.get("/trainers", async (req, res) => {
  try {
    const trainers = await Trainer.find();
    res.status(200).send(trainers);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get Trainer by ID
router.get("/trainers/:id", async (req, res) => {
  try {
    const trainer = await Trainer.findById(req.params.id);
    if (!trainer) {
      return res.status(404).send();
    }
    res.status(200).send(trainer);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Trainer
router.put("/trainers/:id", async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!trainer) {
      return res.status(404).send();
    }
    res.status(200).send(trainer);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete Trainer
router.delete("/trainers/:id", async (req, res) => {
  try {
    const trainer = await Trainer.findByIdAndDelete(req.params.id);
    if (!trainer) {
      return res.status(404).send();
    }
    res.status(200).send(trainer);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
