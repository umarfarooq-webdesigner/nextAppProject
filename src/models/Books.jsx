import mongoose from "mongoose";
const BookSchema = new mongoose.Schema({
  id: Number,
  name: String,
  author: String,
  publishDate: String,
  rating: Number,
});

export default mongoose.models.Books || mongoose.model("Books", BookSchema);
