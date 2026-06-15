export default function name() {
  const students = [
    {
      id: 1,
      name: "Peter",
    },
    {
      id: 2,
      name: "Lane",
    },
  ];

  students.splice(1, 1);

  // console.log(students);

  return (
    <>
      <div>Hello</div>
    </>
  );
}
