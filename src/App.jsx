import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Modal from "./Components/Modal/Modal";
function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!modalIsOpen);
  };
  return (
    <>
      <Header openModal={toggleModal}></Header>
      <Modal isOpen={modalIsOpen} onClose={toggleModal} />
      <Main />
    </>
  );
}

export default App;
