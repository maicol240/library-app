import "./Card.css";

export default function Card({ book, deleteBook, showEdit }) {
  const handleError = (event) => {
    event.target.src = "https://via.placeholder.com/150";
  };
  const style = {
    color: "black",
    fontWeight: "bolder",
    border: "1px solid black",
    padding: "5px",
    borderRadius: "5px",
    backgroundColor: "hsl(201, 100%, 60%)",
    width: "90%",
  };

  return (
    <>
      <div className="card-container">
        <img src={book.img} onError={handleError} alt={book.title} />
        <h3>{book.title}</h3>
        <p>
          <strong>Author: </strong> {book.author}
        </p>
        <p>
          <strong>Status: </strong>
          {book.status}
        </p>
        {book.link === "" ? (
          <p style={style}> Link Coming soon</p>
        ) : (
          <a href={book.link} target="_blank" rel="noreferrer">
            Read More
          </a>
        )}
        <div className="actions">
          <button onClick={() => showEdit(book.id)} className="edit">
            Edit
          </button>
          <button onClick={() => deleteBook(book.id)} className="delete">
            Delete
          </button>
        </div>
      </div>
    </>
  );
}
