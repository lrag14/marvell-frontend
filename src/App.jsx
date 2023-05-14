import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

//PAGES************
import CharactersList from "./pages/CharactersList.jsx";
import ComicsList from "./pages/ComicsList.jsx";
import Favorits from "./pages/Favorits.jsx";
// import CharacterComicsList from "./pages/CharacterComicsList.jsx";

// COMPONENTS**********************
import Header from "./components/Header.jsx";
import Search from "./components/Search.jsx";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<CharactersList />} />
        <Route path="/comics" element={<ComicsList />} />
        <Route path="/favoris" element={<Favorits />} />
        {/* <Route path="/comic/:comicId" element={<CharacterComicsList />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
