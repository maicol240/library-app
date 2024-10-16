import { useState } from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <Main />
    </>
  );
}

export default App;
