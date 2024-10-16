import styles from "./Header.css";
import book from "../../../public/book.svg";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-content">
          <div className="header__title">
            <img src={book} alt="Book" className="book-icon" />
            <h1>MyLibrary</h1>
          </div>
          <div className="button">Create</div>
        </div>
      </header>
    </>
  );
}
