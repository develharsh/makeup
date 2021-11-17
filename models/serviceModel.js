const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Name can not be empty."],
      unique: true,
    },
    public_id: {
      type: String,
      require: [true, "Public Id Missing."],
    },
    url: {
      type: String,
      require: [true, "Url Missing."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports =
  mongoose.models.Service || mongoose.model("Service", serviceSchema);
