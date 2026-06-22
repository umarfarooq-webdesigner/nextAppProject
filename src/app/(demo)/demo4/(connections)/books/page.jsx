import Books from "@/models/Books";
import connectDB from "@/lib/db";
import BookListClient from "../../components/page";

export default async function BooksData() {
  await connectDB();

  // Fetch from MongoDB and transform documents into clean, serializable items
  const booksFromDB = await Books.find({}).lean();

  const formattedBooks = booksFromDB.map((doc) => ({
    _id: doc._id.toString(), // Convert Object ID to string
    name: doc.name,
    author: doc.author,
    publishDate: doc.publishDate || "",
    rating: doc.rating || 0,
  }));

  return (
    <div className="py-10 bg-gray-50 min-h-screen">
      <BookListClient books={formattedBooks} />
    </div>
  );
}
