import { Routes, Route, useParams } from "react-router-dom";
import HomePage from "./HomePage";
import CategoryPage from "./CategoryPage";
import Navbar from "./Navbar";
import InfoGame from "./InfoGame";
import { Container, Row, Col } from "react-bootstrap";
import CategoryList from "./CategoryList";
import FooterAside from "./FooterAside";
import Dice from "./Dice";

function AppRouter() {
  let navigationLink = useParams();
  console.log(navigationLink);
  return (
    <Container fluid>
      <div className="vh-100 d-flex flex-column flex-lg-row ">
        <Row className="order-1 m-lg-0 col-lg-1 p-lg-3">
          <Col className="bg-warning rounded asidefooter">
            <FooterAside></FooterAside>
          </Col>
        </Row>

        <Col
          lg={11}
          className=" order-lg-2 flex-grow-1 d-flex flex-column justify-content-between align-items-center"
        >
          <Navbar />
          <div className="flex-grow-1 w-100 d-flex justify-content-center align-items-center">
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
              <Route path="/dice" element={<Dice></Dice>}></Route>
            </Routes>
          </div>
        </Col>
      </div>
    </Container>
  );
}

export default AppRouter;
