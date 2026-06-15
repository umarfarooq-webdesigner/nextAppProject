import Link from "next/link";

export default function Navbar() {
  const navlink = [
    {
      label: "about",
      path: "/demo1/about",
    },
    {
      label: "contact",
      path: "/demo1/contact",
    },
    {
      label: "projects",
      path: "/demo1/projects",
    },
  ];

  return (<>
            <div className="flex justify-between bg-teal-400 uppercase px-10 py-2">
                    <Link href={"/demo1"} className="font-black">Home</Link>
                <ul className="flex gap-4 ">
                    {navlink.map( ({label, path}) => (
                        <li key={label}>
                            <Link href={path}>{label}</Link>
                        </li>
                    ) )}
                </ul>
            </div>
  
  </>);
}
