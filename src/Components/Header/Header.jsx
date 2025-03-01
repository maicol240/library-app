import "./Header.css";
import book from "/book.svg";

export default function Header({ openModal }) {
  return (
    <>
      <header>
        <div className="header-content">
          <div className="header__title">
            <img src={book} alt="Book" className="book-icon" />
            <h1>MyLibrary</h1>
          </div>
          <button type="button" onClick={openModal} className="button">
            Create
          </button>
        </div>
      </header>
    </>
  );
}
