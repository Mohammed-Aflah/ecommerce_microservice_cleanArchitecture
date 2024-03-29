import mongoose from "mongoose";

const authModel = new mongoose.Schema({
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  name: String,
  status:Boolean,
});
const modelName = String(process.env.USER_MODEL);
export default mongoose.model(modelName, authModel);
