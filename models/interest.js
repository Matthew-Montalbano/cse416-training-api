import mongoose from "mongoose";

const interestSchema = mongoose.Schema({
  title: String,
  description: String,
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Interest = mongoose.model("Interest", interestSchema);

export default Interest;
