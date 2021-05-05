import "./App.css";
import Header from "./components/Header/Header";
import SignIn from "./components/SignInform";
import { Container, Row, Col } from "react-bootstrap";
import golfBg from "./images/golf_background/golf_bg2.png";

function App() {
  return (
    <div className="App">
      <>
        <Header />
        <Container fluid>
          <Row style={{ marginTop: "100px" }}>
            <Col xs={7} className="">
              <img
                src={golfBg}
                alt=""
                srcset=""
                style={{
                  width: "50vw",
                  height: "470px",
                }}
              />
            </Col>
            <Col xs={5}>
              <div className="form-wrapper">
                <SignIn />
              </div>
            </Col>
          </Row>
        </Container>
      </>
    </div>
  );
}

export default App;
