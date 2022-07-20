import Home from "./components/Home"
import { Route, Routes } from "react-router-dom";
import CharacterDetails from "./components/CharacterDetail";

function App() {

  return (
    <>
      <Routes>
        <Route path="/characters/:id" element={<CharacterDetails />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;