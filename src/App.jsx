import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Modal from "./Components/Modal/Modal";
import getSeedBooks from "./util/seed-data/seedData";
import ModalEdit from "./Components/Modal/ModalEdit";
function App() {
  const seedBooks = getSeedBooks();

  const [books, setBooks] = useState(seedBooks);

  const [showModal, setModalIsOpen] = useState(false);

  const [showEdit, setEdit] = useState(false);
  const [bookToEdit, setBookToEdit] = useState(null);

  const addBook = (book) => {
    book.id = books.length + 1; // Automatically assign id based on current length of books array
    setBooks([...books, book]);
  };
  const handleDelete = (id) => {
    const updatedBooks = books.filter((book) => book.id !== id);
    updatedBooks.forEach((book, index) => (book.id = index + 1));
    setBooks(updatedBooks);
  };

  const toggleModal = () => {
    setModalIsOpen(!showModal);
  };

  const toggleModalEdit = (id = null) => {
    setEdit(!showEdit);

    if (id !== null) {
      const bookToEdit = books.find((book) => book.id === id);
      bookToEdit && setBookToEdit(bookToEdit);
    }
  };
  const setUpdate = (updatedBook) => {
    setBooks((prevBooks) =>
      prevBooks.map((book) =>
        book.id === updatedBook.id ? { ...book, ...updatedBook } : book
      )
    );
  };
  return (
    <>
      <Header openModal={toggleModal}></Header>
      <ModalEdit
        showModalEdit={showEdit}
        getBook={bookToEdit}
        onClose={toggleModalEdit}
        setUpdate={setUpdate}
      />
      <Modal showModal={showModal} addBook={addBook} onClose={toggleModal} />
      <Main
        books={books}
        handleEdit={toggleModalEdit}
        deleteBook={handleDelete}
      />
    </>
  );
}

export default App;
