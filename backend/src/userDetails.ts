import mongoose from "mongoose";
const UserDetails = new mongoose.Schema(
  {
    name: String,
    email: String,
    password: String,
  },
  { collection: "UserDetails", timestamps: true }
);
mongoose.model("UserDetails", UserDetails);
export default mongoose.model("UserDetails");
