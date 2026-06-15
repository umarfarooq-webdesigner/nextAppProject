import Link from "next/link";

export const metadata = {
  title: "Server component Page",
};

const ServerComp = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");

  const data = await res.json();

  return (
    <>
      <div className=" justify-center text-center items-center">
        <h1>Server Components Page</h1>

        <div className="my-5">
          <Link
            href={"/demo3"}
            className="px-5 py-4 rounded capitalize bg-amber-600 text-white"
          >
            back
          </Link>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-10 py-5 ">
          {data.map(({ id, name, username, email }) => (
            <div className="border bg-gray-100 p-4 rounded" key={id}>
              <h1>{name}</h1>
              <h2>{username}</h2>
              <p>{email}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ServerComp;
