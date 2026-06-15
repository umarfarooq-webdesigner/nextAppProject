const students = [
  {
    id: 1,
    username: "johnsmith",
    name: "John Smith",
    email: "john.smith@example.com",
    address: "123 Maple St, New York, NY",
    phone: "+1-555-1001",
  },
];

export async function GET() {
  return Response.json(students);
}

export async function POST(req) {
  const data = await req.json();

  const newStudent = {
    id: students.length + 1,
    username: data.username,
    name: data.name,
    email: data.email,
    address: data.address,
    phone: data.phone,
  };

  students.push(newStudent);

  return Response.json(
    {
      message: "Student data added successfully",
      student: newStudent,
    },
    {
      status: 201,
    },
  );
}
