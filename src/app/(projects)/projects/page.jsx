import Link from "next/link";
import { FiHome } from "react-icons/fi";

export const metadata = {
  title: "Project's",
};

const project = () => {
  const projectLinks = [
    {
      label: "project1",
      path: "/project1",
    },
    {
      label: "project2",
      path: "/project2",
    },
    {
      label: "project3",
      path: "/project3",
    },
    {
      label: "project4",
      path: "/project4",
    },
    {
      label: "project5",
      path: "/project5",
    },
    {
      label: "project6",
      path: "/project6",
    },

    {
      label: "project7",
      path: "/project7",
    },
    {
      label: "project8",
      path: "/project8",
    },
    {
      label: "project9",
      path: "/project9",
    },
    {
      label: "project10",
      path: "/project10",
    },
    {
      label: "project11",
      path: "/project11",
    },
    {
      label: "project12",
      path: "/project12",
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen grid justify-center items-center text-center px-10 bg-black text-white">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
          {projectLinks.map(({ label, path }) => (
            <li
              key={label}
              className=" capitalize text-xl  shadow shadow-white px-4 py-2 rounded hover:bg-white hover:text-black"
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>
        <div>
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
    </>
  );
};

export default project;
