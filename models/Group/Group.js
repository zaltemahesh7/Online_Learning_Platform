const mongoose = require("mongoose");

const GroupSchema = new mongoose.Schema({
  g_id: { type: String, required: true, unique: true },
  c_id: { type: mongoose.Schema.Types.ObjectId, ref: "Course", required: true },
  g_name: { type: String, required: true },
});

const Group = mongoose.model("Group", GroupSchema);
module.exports = Group;
