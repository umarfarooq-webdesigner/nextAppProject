const users = [];

export async function GET() {
  return new Response(
    `
    <form method="POST">
      <input name="name" placeholder="Name" value="Farooq" />
      <input name="email" placeholder="Email" value="farooq@example.com" />
      <button type="submit">Add User</button>
    </form>
    `,
    {
      headers: {
        "Content-Type": "text/html",
      },
    }
  );
}

export async function POST(request) {
  const formData = await request.formData();

  const newUser = {
    id: Date.now(),
    name: formData.get("name"),
    email: formData.get("email"),
  };

  users.push(newUser);

  return Response.json(
    {
      message: "User added successfully",
      user: newUser,
    },
    { status: 201 }
  );
}