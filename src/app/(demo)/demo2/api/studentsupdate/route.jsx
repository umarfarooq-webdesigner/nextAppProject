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

//GET Data
export async function GET() {
  return Response.json(students);
}

//POST Data
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
      message: "Student Added Successfully",
      student: newStudent,
    },
    {
      status: 201,
    },
  );
}

// DELETE Data
export async function DELETE(res) {
  const data = await res.json();

  const studentIndex = students.findIndex((student) => student.id === data.id);

  if (studentIndex === -1) {
    return Response.json(
      {
        message: "Student Data Not Found.",
      },
      {
        status: 404,
      },
    );
  }

  const deleteStudent = students[studentIndex];
  students.splice(studentIndex, 1);

  return Response.json({
    message: "Student Data Deleted Successfully.",
    student: deleteStudent,
  });
}

// UPDATE Data

export async function PUT(res) {
  const data = await res.json();

  const studentIndex = students.findIndex((student) => student.id === data.id);
  if (studentIndex === -1) {
    return Response.json(
      {
        message: "Student Data NOt Found.",
      },
      {
        status: 404,
      },
    );
  }

  students[studentIndex] = {
    id: data.id,
    username: data.username,
    name: data.name,
    email: data.email,
    address: data.address,
    phone: data.phone,
  };

  return Response.json({
    message: "Student Data Update duccessfully",
    student: students[studentIndex],
  });
}
