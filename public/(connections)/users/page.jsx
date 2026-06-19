import connectDB from "@/lib/db";
import User from "@/models/User";

export default async function HomePage() {
  // 1. Connect to the database
  await connectDB();

  // 2. Fetch all user records from the collection
  const users = await User.find({}).lean();

  return (
    <>
      <main>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center text-center gap-4 px-10 py-5">
          {users.map(({ id, username, name, email, address, phone }) => (
            <div key={id} className="border px-4 py-2 h-40 rounded-2xl">
              <h1 className="text-center font-bold">{name}</h1>
              <p className="text-sm">{username}</p>
              <p className="text-sm">{email}</p>
              <p className="text-sm">{address}</p>
              <p className="text-sm">{phone}</p>
            </div>
          ))}
        </div>
      </main>
    </>
  );
}
