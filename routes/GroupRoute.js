const express = require("express");
const router = express.Router();
const Group = require("../models/Group/Group");

// Create a Group
router.post("/groups", async (req, res) => {
  try {
    const group = new Group(req.body);
    await group.save();
    res.status(201).send(group);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Get all Groups
router.get("/groups", async (req, res) => {
  try {
    const groups = await Group.find();
    res.status(200).send(groups);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Get Group by ID
router.get("/groups/:id", async (req, res) => {
  try {
    const group = await Group.findById(req.params.id);
    if (!group) {
      return res.status(404).send();
    }
    res.status(200).send(group);
  } catch (error) {
    res.status(500).send(error);
  }
});

// Update Group
router.put("/groups/:id", async (req, res) => {
  try {
    const group = await Group.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!group) {
      return res.status(404).send();
    }
    res.status(200).send(group);
  } catch (error) {
    res.status(400).send(error);
  }
});

// Delete Group
router.delete("/groups/:id", async (req, res) => {
  try {
    const group = await Group.findByIdAndDelete(req.params.id);
    if (!group) {
      return res.status(404).send();
    }
    res.status(200).send(group);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
