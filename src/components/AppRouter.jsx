import { Routes, Route, useParams } from "react-router-dom";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import Navbar from "./Navbar";
import InfoGame from "./InfoGame";
import { Container, Row, Col } from "react-bootstrap";
import CategoryList from "./CategoryList";
import FooterAside from "./FooterAside";

function AppRouter() {
  let navigationLink = useParams();
  console.log(navigationLink);
  return (
    <Container>
      <div className="vh-100 d-flex flex-column flex-md-row">
        <Col md={2} className="bg-primary order-1">
          <FooterAside></FooterAside>
        </Col>
        <Col md={10} className="bg-danger order-md-2 flex-grow-1">
          {" "}
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/infogame" element={<InfoGame></InfoGame>}></Route>
            <Route
              path="/categorylist"
              element={<CategoryList></CategoryList>}
            ></Route>
            <Route
              path="/category/:category"
              element={<CategoryPage />}
            ></Route>
          </Routes>
        </Col>
      </div>
    </Container>
  );
}

export default AppRouter;
