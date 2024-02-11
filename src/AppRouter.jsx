import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import Navbar from "./Navbar";
import InfoGame from "./InfoGame";
import { Container } from "react-bootstrap";

function AppRouter() {
  return (
    <>
      <Container className="d-flex align-items-center justify-content-evenly flex-column vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/infogame" element={<InfoGame></InfoGame>}></Route>
          <Route
            path="/categorypage/:category"
            element={<CategoryPage />}
          ></Route>
        </Routes>
      </Container>
    </>
  );
}

export default AppRouter;
