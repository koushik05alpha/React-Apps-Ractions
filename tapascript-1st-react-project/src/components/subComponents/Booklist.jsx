import Bookrow from "./Bookfeatures/Bookrow";

const BOOK = [
  {
    id: 1,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    features: false,
  },
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    features: false,
  },
  {
    id: 3,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    features: false,
  },
  {
    id: 4,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    features: false,
  },
  {
    id: 5,
    title: "The Catcher in the Rye",
    author: "J.D. Salinger",
    features: false,
  },
  {
    id: 6,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    features: false,
  },
  {
    id: 7,
    title: "Moby Dick",
    author: "Herman Melville",
    features: false,
  },
  {
    id: 8,
    title: "War and Peace",
    author: "Leo Tolstoy",
    features: false,
  },
  {
    id: 9,
    title: "Crime and Punishment",
    author: "Fyodor Dostoevsky",
    features: false,
  },
  {
    id: 10,
    title: "Brave New World",
    author: "Aldous Huxley",
    features: false,
  },
];

function Booklist() {
  return (
    <ul className="space-y-4">
      {BOOK.map((book) => (
        <li
          key={book.id}
          className="flex items-center justify-between p-4 bg-gray-500 shadow rounded-lg "
        >
          <Bookrow book={book} />
        </li>
      ))}
    </ul>
  );
}

export default Booklist;
