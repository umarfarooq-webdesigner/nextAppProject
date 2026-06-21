export const metadata = {
  title: "Demo4",
};
import Link from "next/link";

const Demo4 = () => {
  return (
    <div className="grid justify-center items-center my-10 px-10">
      <div className="flex flex-col justify-center items-center w-full lg:w-2xl">
        <h1 className="text-2xl font-bold text-center">
          📅 Day 18 — MongoDB Setup{" "}
        </h1>
        <p>📚 Learn: Why Mongoose?</p>
        <ul>
          <li>
            <b>MongoDB Atlas</b> is a database that lives in the cloud. You
            don't need to install anything heavy on your computer.
          </li>
          <li>
            <b>Mongoose </b> is like a manager for your database. It allows you
            to create a strict "Schema" (a blueprint) so your data stays
            organized and structured (e.g., ensuring every user has a name and
            an email).
          </li>
        </ul>
        <ul>
          <br />
          <p className="font-bold">🛠 Practice: Step-by-Step Setup</p>
          <li>Step 1: Install Mongoose</li>
          <li>Step 2: Add your Connection String</li>
          <li>Step 3: Create the Database Connection Helper</li>
          <li>Step 4: Create the User Schema</li>
        </ul>

        <div className="mt-10">
          <p className=" capitalize font-bold">Click on the Links</p>
          <ul className="flex flex-col gap-2">
            <li className="text-center bg-sky-300 hover:bg-sky-400 cursor-pointer">
              <Link href={"/demo4/users"}>Users</Link>
            </li>
            <li className="text-center bg-sky-300 hover:bg-sky-400 cursor-pointer">
              <Link href={"/demo4/students"}>Students</Link>
            </li>
            <li className="text-center bg-sky-300 hover:bg-sky-400 cursor-pointer">
              <Link href={"/demo4/books"}>Books</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Demo4;
