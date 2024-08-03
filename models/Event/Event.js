const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const eventSchema = new Schema(
  {
    event_name: { type: String, required: true },
    event_date: { type: Date, required: true },
    event_description: { type: String, required: true },
    t_id: { type: Schema.Types.ObjectId, ref: "Trainer", required: true },
    event_image: { type: String, required: true },
  },
  { timestamps: true }
);

const Event = mongoose.model("Event", eventSchema);
module.exports = Event;
