import Link from "next/link";
import { FiHome } from "react-icons/fi";

export const metadata = {
  title: "Demo's",
};

const demo = () => {
  const demoLinks = [
    {
      label: "demo1",
      path: "/demo1",
    },
    {
      label: "demo2",
      path: "/demo2",
    },
    {
      label: "demo3",
      path: "/demo3",
    },
    {
      label: "demo4",
      path: "/demo4",
    },
    {
      label: "demo5",
      path: "/demo5",
    },
    {
      label: "demo6",
      path: "/demo6",
    },

    {
      label: "demo7",
      path: "/demo7",
    },
    {
      label: "demo8",
      path: "/demo8",
    },
    {
      label: "demo9",
      path: "/demo9",
    },
    {
      label: "demo10",
      path: "/demo10",
    },
    {
      label: "demo11",
      path: "/demo11",
    },
    {
      label: "demo12",
      path: "/demo12",
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen grid justify-center items-center text-center px-10 bg-black text-white">
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 ">
          {demoLinks.map(({ label, path }) => (
            <li
              key={label}
              className=" capitalize text-xl  shadow shadow-white px-4 py-2 rounded hover:bg-white hover:text-black"
            >
              <Link href={path}>{label}</Link>
            </li>
          ))}
        </ul>

        <div>
          <button className="text-2xl bg-teal-500 px-10 py-2 rounded hover:bg-teal-700 ">
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

export default demo;
