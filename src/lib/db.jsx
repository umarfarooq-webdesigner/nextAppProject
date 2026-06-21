import mongoose from "mongoose";

// 1. Setup and Environment Check
const MONGODB_URI = process.env.MONGODB_URI;
if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local",
  );
}

// 2. Creating a Global Cache (The Serverless Fix)
let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

// 3. The Connection Function
async function connectDB() {
  if (cached.conn) {
    return cached.conn;
  }

  // Step A (Reuse): When connectDB() is called, it first checks if we already have an active, working connection saved in our cache. If we do, it immediately returns it instead of making MongoDB work extra hard to open a new one.

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongooseInstance) => {
        return mongooseInstance;
      });
  }

  // Step B (Connect): If there is no active connection and no pending attempt to connect, it kicks off the connection process using mongoose.connect.

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectDB;
