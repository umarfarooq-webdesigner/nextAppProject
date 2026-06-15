const page = () => {
  return (
    <>
      <div className="w-full min-h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-2xl font-bold py-2">📅 API Routes</h1>
        <p>📚 Learn</p>
        <li>Route Handlers</li>
        <p>For APIs in Next.js, you should know these 5 HTTP methods:</p>
        <ol style={{ listStyleType: "decimal" }}>
          <li>GET → Read 📖</li>
          <li>POST → Create ➕</li>
          <li>PUT → Replace 🔄</li>
          <li>PATCH → Modify ✏️</li>
          <li>DELETE → Remove ❌</li>
        </ol>
        <div>
          <p className=" text-sm bg-amber-500">demo2/api/users</p>
          <p className=" text-sm bg-teal-500 my-4">demo2/api/students</p>
          <p className=" text-sm bg-black text-white ">demo2/api/books</p>
        </div>
      </div>
    </>
  );
};

export default page;
