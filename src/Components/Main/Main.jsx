import "./Main.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
export default function Main() {
  //seed data for the books
  const books = [
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/71FxgtFKcQL.jpg",
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      status: "Completed",
      link: "https://www.amazon.com/Kill-Mockingbird-Harper-Lee/dp/0446310786",
    },
    {
      img: "https://m.media-amazon.com/images/I/712cDO7d73L._SL1500_.jpg",
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      status: "Reading",
      link: "https://www.amazon.com/Hobbit-J-R-Tolkien/dp/054792822X",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/81EcXiV-9WL.jpg",
      title: "The Da Vinci Code",
      author: "Dan Brown",
      status: "Pending",
      link: "https://www.amazon.com/Da-Vinci-Code-Dan-Brown/dp/0307474275",
    },
    {
      img: "https://m.media-amazon.com/images/I/61I24wOsn8L._SL1200_.jpg",
      title: "The Hunger Games",
      author: "Suzanne Collins",
      status: "Completed",
      link: "https://www.amazon.com/Hunger-Games-Suzanne-Collins/dp/0439023521",
    },
    {
      img: "https://images-na.ssl-images-amazon.com/images/I/81m1s4wIPML.jpg",

      title: "Harry Potter and the Sorcerer's Stone",
      author: "J.K. Rowling",
      status: "Reading",
      link: "https://www.amazon.com/Harry-Potter-Sorcerers-Stone-Rowling/dp/059035342X",
    },
  ];
  const filters = ["All", "Reading", "Completed", "Pending"];
  const [status, setStatus] = useState("All");
  const [count, setCount] = useState(books.length);

  const handleFilterChange = (e) => {
    setStatus(e.target.textContent);
  };
  useEffect(() => {
    setCount(
      books.filter((book) => status === "All" || book.status === status).length
    );
  }, [status, books]);

  return (
    <>
      <main>
        <div className="tool-bar">
          <h2>Books: {count}</h2>
          <div className="filter">
            <h2>Status:</h2>

            {filters.map((filter) => (
              <h2
                className={`status ${status === filter ? "active" : " "}`}
                onClick={handleFilterChange}
                key={filter}
              >
                {filter}
              </h2>
            ))}
          </div>
        </div>
        <div className="book-list">
          {books
            .filter((book) => status === "All" || book.status === status)
            .map((book) => (
              <Card key={book.title} book={book} />
            ))}
        </div>
      </main>
    </>
  );
}
