import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//PAGES************
import CharactersList from "./pages/CharactersList.jsx";
import ComicsList from "./pages/ComicsList.jsx";

// COMPONENTS**********************
import Header from "./components/Header.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/comics" element={<ComicsList />} />
      </Routes>
    </Router>
  );
}

export default App;
