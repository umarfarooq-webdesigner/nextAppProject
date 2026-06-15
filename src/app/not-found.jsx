import { FiHome } from "react-icons/fi";
import Link from "next/link";

export default function Notfound() {
  return (
    <div className="flex flex-col justify-center items-center text-center w-fill min-h-screen bg-black text-white">
      <h1 className="text-6xl text-teal-400">404</h1>
      <hr className="w-30  text-center  border-2 border-teal-500 my-4" />
      <h1 className="text-xl mt-5">Page Not Found</h1>
      <p className="text-sm text-gray-400 py-2">
        The page you're looking for doesn't exist or has been
        <br />
        moved to another location.
      </p>
      <div className="mt-5">
        <button className="bg-teal-500 px-2 py-1 rounded hover:bg-teal-700">
          <Link
            href={"/"}
            className="flex justify-center items-center gap-2 uppercase"
          >
            <FiHome />
            Home
          </Link>
        </button>
      </div>
    </div>
  );
}
