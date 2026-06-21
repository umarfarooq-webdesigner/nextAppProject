import Books from "@/models/Books";
import connectDB from "@/lib/db";
export default async function BooksData() {
  await connectDB();

  const BooksData = await Books.find({}).lean();

  return (
    <>
      <div className="py-5">
        <h1 className="text-center text-2xl uppercase font-bold ">
          Books Data
        </h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-center items-center text-center gap-4 px-10 py-6">
          {BooksData.map(({ id, name, author, publishDate, rating }) => (
            <div key={id} className="border px-4 py-6 rounded h-40">
              <h1 className="text-center font-bold">{name}</h1>
              <p>{author}</p>
              <p>{publishDate}</p>
              <p>{rating}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
