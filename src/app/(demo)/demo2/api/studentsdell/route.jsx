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

export async function POST(res) {
  const data = await res.json();

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
      message: "Students Added Successfully",
      student: newStudent,
    },
    {
      status: 201,
    },
  );
}

export async function DELETE(req) {
  const data = await req.json();

  const studentIndex = students.findIndex(
    (student) => student.id === data.id,
  );

  if (studentIndex === -1) {
    return Response.json(
      {
        message: "Student Not Found",
      },
      {
        status: 404,
      },
    );
  }

  const deleteStudent = students[studentIndex];
  students.splice(studentIndex, 1);

  return Response.json({
    message: "Student deleted Successfully.",
    student: deleteStudent,
  });
}
