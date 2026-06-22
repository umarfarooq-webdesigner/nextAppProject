"use client";

import { useState } from "react";
import FormData from "../(connections)/books/FormData";
import { deleteBook } from "@/actions/bookActions";

export default function BookListClient({ books }) {
  const [editBook, setEditBook] = useState(null);
  
  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Calculate indexes for slicing the data
  const indexOfLastBook = currentPage * itemsPerPage;
  const indexOfFirstBook = indexOfLastBook - itemsPerPage;
  const currentBooks = books?.slice(indexOfFirstBook, indexOfLastBook) || [];
  const totalPages = Math.ceil((books?.length || 0) / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    // Optional: Scroll to the top of the list when page changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Form receives edit targets and clear actions */}
      <FormData editBook={editBook} setEditBook={setEditBook} />

      <h1 className="text-center text-2xl uppercase font-bold text-gray-800 mb-6 mt-6">
        Books Data
      </h1>

      {/* Grid List */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-10 py-6">
        {currentBooks.map((book) => (
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
                    // If you delete the last item on the current page, go back a page
                    if (currentBooks.length === 1 && currentPage > 1) {
                      setCurrentPage(currentPage - 1);
                    }
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

      {/* Pagination Controls */}
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-4 mb-10">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Previous
          </button>
          
          <span className="text-sm text-gray-600 font-medium">
            Page {currentPage} of {totalPages}
          </span>

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="px-4 py-2 text-sm font-medium bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg disabled:opacity-50 disabled:cursor-not-allowed transition"
          >
            Next
          </button>
        </div>
      )}
    </>
  );
}