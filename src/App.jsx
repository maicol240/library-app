import { useState, useRef } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Modal from "./Components/Modal/Modal";
import getSeedBooks from "./util/seed-data/seedData";
function App() {
  const seedBooks = getSeedBooks();

  const [books, setBooks] = useState(seedBooks);

  const [showModal, setModalIsOpen] = useState(false);

  const addBook = (book) => {
    book.id = books.length + 1; // Automatically assign id based on current length of books array
    setBooks([...books, book]);
  };

  const toggleModal = () => {
    setModalIsOpen(!showModal);
  };
  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    updatedBooks.forEach((book, index) => (book.id = index + 1));
    setBooks(updatedBooks);
  };
  return (
    <>
      <Header openModal={toggleModal}></Header>
      <Modal showModal={showModal} addBook={addBook} onClose={toggleModal} />
      <Main books={books} deleteBook={handleDelete} />
    </>
  );
}

export default App;
