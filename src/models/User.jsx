import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
  id: Number,
  username: String,
  name: String,
  email: String,
  address: String,
  phone: Number,
});

export default mongoose.models.Users || mongoose.model("Users", UserSchema);



