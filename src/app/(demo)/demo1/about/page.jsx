"use client";
import { useRouter } from "next/navigation";

const AboutPage = () => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col gap-4 justify-center items-center text-center">
        <h1>About Page</h1>
        <button
          className="border px-4 py-2 rounded bg-teal-400 text-white hover:bg-teal-600"
          onClick={() => router.back()}
        >
          Go Back
        </button>

        <button
          className="border px-4 py-2 rounded bg-teal-400 text-white hover:bg-teal-600"
          onClick={() => router.push("/demo1/projects")}
        >
          Go Direct
        </button>

        <button
          className="border px-4 py-2 rounded bg-teal-400 text-white hover:bg-teal-600"
          onClick={() => router.replace("/demo1/contact")}
        >
          Go Replace
        </button>

        <button
          className="border px-4 py-2 rounded bg-teal-400 text-white hover:bg-teal-600"
          onClick={() => router.refresh()}
        >
          Refresh Page
        </button>
      </div>
    </>
  );
};

export default AboutPage;
