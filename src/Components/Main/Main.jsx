import "./Main.css";
import { useState } from "react";

export default function Main() {
  const filters = ["All", "Reading", "Completed"];
  const [status, setStatus] = useState("All");

  const handleFilterChange = (e) => {
    setStatus(e.target.textContent);
  };

  return (
    <>
      <main>
        <div className="tool-bar">
          <h2>Books: 0</h2>
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
        <div className="book-list"></div>
      </main>
    </>
  );
}
