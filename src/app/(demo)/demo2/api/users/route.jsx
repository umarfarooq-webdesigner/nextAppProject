export async function GET() {
  const userData = [
    {
      name: "Peter",
      id: "bsf2100899",
    },
    {
      name: "Lane",
      id: "bsf2100125",
    },
  ];

  return Response.json(userData);
}
