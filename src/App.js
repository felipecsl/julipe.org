import "./App.css";
import Home from "./Home.jsx";
import Rsvp from "./Rsvp.jsx";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/rsvp" element={<Rsvp />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
}

export default App;
