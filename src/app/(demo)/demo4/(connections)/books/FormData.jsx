"use client";

import { createBook, updateBook } from "@/actions/bookActions";

import { useState, useEffect } from "react";

const FormData = ({ editBook, setEditBook }) => {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [publishDate, setPublishDate] = useState("");
  const [rating, setRating] = useState("");

  // Pre-fill fields if editing a book
  useEffect(() => {
    if (editBook) {
      setName(editBook.name || "");
      setAuthor(editBook.author || "");
      setPublishDate(editBook.publishDate || "");
      setRating(editBook.rating || "");
    } else {
      clearForm();
    }
  }, [editBook]);

  const clearForm = () => {
    setName("");
    setAuthor("");
    setPublishDate("");
    setRating("");
    if (setEditBook) setEditBook(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = { name, author, publishDate, rating };

    if (editBook) {
      // Execute Update Workflow
      await updateBook(editBook._id, data);
      clearForm();
    } else {
      // Execute Create Workflow
      const formData = new window.FormData();
      formData.append("name", name);
      formData.append("author", author);
      formData.append("publishDate", publishDate);
      formData.append("rating", rating);

      await createBook(formData);
      clearForm();
    }
  };

  return (
    <div className="flex justify-center text-center items-center mb-8">
      <div className="border border-gray-300 shadow-sm px-6 py-5 rounded-2xl bg-white w-96">
        <form onSubmit={handleSubmit}>
          <div>
            <h1 className="font-bold text-lg text-gray-800">
              {editBook ? "Edit Book Data" : "Enter Book Data"}
            </h1>
          </div>

          {/* Book Name */}
          <div className="grid grid-cols-3 gap-2 py-3 items-center">
            <label
              htmlFor="name"
              className="text-sm font-medium text-gray-700 col-span-1 text-left"
            >
              Book Name
            </label>
            <input
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="col-span-2 rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          {/* Author */}
          <div className="grid grid-cols-3 gap-2 py-3 items-center">
            <label
              htmlFor="author"
              className="text-sm font-medium text-gray-700 col-span-1 text-left"
            >
              Author
            </label>
            <input
              type="text"
              id="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
              className="col-span-2 rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          {/* Publish Date */}
          <div className="grid grid-cols-3 gap-2 py-3 items-center">
            <label
              htmlFor="publishDate"
              className="text-sm font-medium text-gray-700 col-span-1 text-left"
            >
              Publish Date
            </label>
            <input
              type="date"
              id="publishDate"
              value={publishDate}
              onChange={(e) => setPublishDate(e.target.value)}
              className="col-span-2 rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          {/* Rating */}
          <div className="grid grid-cols-3 gap-2 py-3 items-center">
            <label
              htmlFor="rating"
              className="text-sm font-medium text-gray-700 col-span-1 text-left"
            >
              Rating
            </label>
            <input
              type="number"
              id="rating"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              min="0"
              max="5"
              className="col-span-2 rounded-md border border-gray-300 px-3 py-1 shadow-sm focus:border-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-500"
            />
          </div>

          <div className="flex gap-2 mt-2">
            <button
              type="submit"
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded border uppercase text-sm transition"
            >
              {editBook ? "Save Changes" : "Submit"}
            </button>
            {editBook && (
              <button
                type="button"
                onClick={clearForm}
                className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-medium py-2 px-4 rounded border uppercase text-sm transition"
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormData;
