import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Modal from "./Components/Modal/Modal";
function App() {
  const [showModal, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!showModal);
  };
  return (
    <>
      <Header openModal={toggleModal}></Header>
      <Modal showModal={showModal} onClose={toggleModal} />
      <Main />
    </>
  );
}

export default App;
