import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./assets/App.css";
import Homepage from "./pages/homepage";
import Dungeon from "./pages/dungeon";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/dungeon" element={<Dungeon />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
