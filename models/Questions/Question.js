// id
// tid, question, inserted time, uid

const mongoose = require("mongoose");

const QuestionSchema = new mongoose.Schema(
  {
    t_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    question: { type: String, required: true },
    u_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  },
  { timestamps: true }
);

const Question = mongoose.model("Question", QuestionSchema);
module.exports = Question;
