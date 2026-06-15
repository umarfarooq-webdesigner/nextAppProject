import Link from "next/link";

export const metadata = {
  title: "Demo3",
};

const Demo3 = () => {
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h1>📅 Day 13 — Environment Variables (Next.js)</h1>
      <p>📚 Learn</p>
      <h2>1. What are Environment Variables?</h2>
      <p>
        Environment variables are used to store sensitive or configurable data
        outside your code.
      </p>
      <p>Examples:</p>
      <ul
        style={{ listStyleType: "square" }}
        className="bg-amber-50 list-inside pl-6"
      >
        <li>API Keys</li>
        <li>Database URLs</li>
        <li>Secret Tokens</li>
        <li>App URLs</li>
      </ul>

      <div className="mt-10">
        <Link
          href={"/demo3/servercomp"}
          className="px-5 py-4 rounded capitalize bg-amber-600 text-white"
        >
          go to server component
        </Link>
      </div>
    </div>
  );
};

export default Demo3;
