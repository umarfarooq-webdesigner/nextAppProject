"use client";

import { useState } from "react";
import FormData from "../(connections)/books/FormData";
import { deleteBook } from "@/actions/bookActions";

export default function BookListClient({ books }) {
  const [editBook, setEditBook] = useState(null);

  return (
    <>
      {/* Form receives edit targets and clear actions */}
      <FormData editBook={editBook} setEditBook={setEditBook} />

      <h1 className="text-center text-2xl uppercase font-bold text-gray-800 mb-6">
        Books Data
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-6">
        {books.map((book) => (
          <div
            key={book._id}
            className="border border-gray-200 bg-white shadow-sm p-5 rounded-xl flex flex-col justify-between hover:shadow-md transition"
          >
            <div>
              <h2 className="font-bold text-lg text-gray-900 truncate">
                {book.name}
              </h2>
              <p className="text-sm text-gray-600">✍️ {book.author}</p>
              {book.publishDate && (
                <p className="text-xs text-gray-400 mt-1">
                  📅 {book.publishDate}
                </p>
              )}
              {book.rating && (
                <p className="text-sm text-amber-500 mt-1">
                  ⭐ {book.rating}/5
                </p>
              )}
            </div>

            {/* Action Buttons */}
            <div className="grid grid-cols-2 gap-2 mt-4 pt-3 border-t border-gray-100">
              <button
                onClick={() => setEditBook(book)}
                className="bg-amber-50 hover:bg-amber-100 text-amber-700 text-xs font-semibold py-1.5 rounded transition"
              >
                Edit
              </button>
              <button
                onClick={async () => {
                  if (confirm("Are you sure you want to delete this book?")) {
                    await deleteBook(book._id);
                  }
                }}
                className="bg-red-50 hover:bg-red-100 text-red-600 text-xs font-semibold py-1.5 rounded transition"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
