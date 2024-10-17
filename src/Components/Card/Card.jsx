import "./Card.css";

export default function Card({ book }) {
  return (
    <>
      <div className="card-container">
        <img src={book.img} alt={book.title} />
        <h3>{book.title}</h3>
        <p>
          <strong>Author: </strong> {book.author}
        </p>
        <p>
          <strong>Status: </strong>
          {book.status}
        </p>
        <a href={book.link} target="_blank" rel="noreferrer">
          Read More
        </a>

        <div className="actions">
          <button className="edit">Edit</button>
          <button className="delete">Delete</button>
        </div>
      </div>
    </>
  );
}
