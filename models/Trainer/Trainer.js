const mongoose = require("mongoose");

const TrainerSchema = new mongoose.Schema({
  t_id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  phone: { type: String, required: true },
  password: { type: String, required: true },
});

const Trainer = mongoose.model("Trainer", TrainerSchema);
module.exports = Trainer;
