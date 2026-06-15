const Books = [
  {
    id: 1,
    name: "Clean Code",
    author: "Robert C. Martin",
    publishDate: "2008-08-01",
    rating: 4.8,
  }
];

export async function GET() {
  return Response.json(Books);
}

export async function POST(request) {
  const body = await request.json();

  const newBook = {
    id: Books.length + 1,
    name: body.name,
    auther: body.auther,
    publishDate: body.publishDate,
    rating: body.rating,
  };
  Books.push(newBook);

  return Response.json(
    {
      message: "Book added successfully",
      book: newBook,
    },
    {
      status: 201,
    },
  );
}
