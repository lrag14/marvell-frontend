import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//PAGES************
import CharactersList from "./pages/CharactersList.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<CharactersList />} />
      </Routes>
    </Router>
  );
}

export default App;
