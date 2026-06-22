"use server";
import Books from "@/models/Books";
import connectDB from "@/lib/db";
import { revalidatePath } from "next/cache";

// 1. CREATE Action
export async function createBook(formData) {
  await connectDB();

  const name = formData.get("name");
  const author = formData.get("author");
  const publishDate = formData.get("publishDate");
  const rating = Number(formData.get("rating"));

  if (!name || !author) {
    throw new Error("Book Name and Author are required.");
  }

  await Books.create({ name, author, publishDate, rating });

  // Refresh the page automatically to show the new book
  revalidatePath("/");
}

// 2. UPDATE Action
export async function updateBook(id, data) {
  await connectDB();

  await Books.findByIdAndUpdate(id, {
    name: data.name,
    author: data.author,
    publishDate: data.publishDate,
    rating: Number(data.rating),
  });

  revalidatePath("/");
}

// 3. DELETE Action
export async function deleteBook(id) {
  await connectDB();

  await Books.findByIdAndDelete(id);

  revalidatePath("/");
}