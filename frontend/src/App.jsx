import { useState } from "react";
import "./assets/App.css";
import Header from "./layouts/Navbar";
import Board from "./components/board/Board";
import useGetMonster from "./hooks/useGetMonster";
import getCSRFToken from "./utils/getCSRFToken";
import axios from "axios";

function App() {
  // axios.defaults.headers.common["X-CSRFToken"] = getCSRFToken();
  // useGetMonster();

  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
