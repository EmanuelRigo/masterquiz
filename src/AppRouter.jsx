import { Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import Navbar from "./Navbar";
import InfoGame from "./InfoGame";
import { Container } from "react-bootstrap";
import CategoryList from "./CategoryList";

function AppRouter() {
  return (
    <>
      <Container className="d-flex align-items-center justify-content-evenly flex-column vh-100">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />}></Route>
          <Route path="/infogame" element={<InfoGame></InfoGame>}></Route>
          <Route
            path="/categorylist"
            element={<CategoryList></CategoryList>}
          ></Route>
          <Route path="/category/:category" element={<CategoryPage />}></Route>
        </Routes>
      </Container>
    </>
  );
}

export default AppRouter;
