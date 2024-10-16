import "./Card.css";

export default function Card({ children }) {
  return (
    <>
      <div className="card-container">{children}</div>
    </>
  );
}
