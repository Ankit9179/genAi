import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      requird: true,
      unique: true,
    },
    password: {
      type: String,
      requird: true,
    },
    creditBalance: {
      type: Number,
      default: 5,
    },
  },
  { timestamps: true }
);

//if model is present then use will not be generated again
const userModel = mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
