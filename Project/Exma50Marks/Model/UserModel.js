const mongoose = require("mongoose");

const ExamSchema = mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const ExamModel = mongoose.model("ExamPanelData", ExamSchema);

module.exports = ExamModel;