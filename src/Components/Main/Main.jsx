import "./Main.css";
import { useEffect, useState } from "react";
import Card from "../Card/Card";
export default function Main({ books, deleteBook, handleEdit }) {
  const filters = ["All", "Reading", "Completed", "Pending"];
  const [status, setStatus] = useState("All");
  const [count, setCount] = useState(0);

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
              <Card
                key={book.id}
                showEdit={handleEdit}
                deleteBook={deleteBook}
                book={book}
              />
            ))}
        </div>
      </main>
    </>
  );
}
