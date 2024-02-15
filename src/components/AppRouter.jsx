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
    <Container className="d-flex align-items-center justify-content-between flex-column vh-100">
      <Row className="vh-100 ">
        <Col xs={12} md={2} className="bg-primary col-12 order-1 ">
          <FooterAside></FooterAside>
        </Col>
        <Col xs={12} md={10} className="bg-danger col-12 order-md-2 ">
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
      </Row>
    </Container>
  );
}

export default AppRouter;
