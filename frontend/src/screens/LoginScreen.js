import React from "react";
import SignIn from "../components/SignInform";
import { Container, Row, Col } from "react-bootstrap";
import golfBg from "../images/golf_bg2.png";

const LoginScreen = () => {
  return (
    <div>
      <Container fluid>
        <Row style={{ marginTop: "90px" }}>
          <Col xs={7} className="" style={{ marginTop: "10px" }}>
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
          <Col xs={5} style={{ borderLeft: "1px solid #3c3c3c" }}>
            <div className="form-wrapper">
              <SignIn />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default LoginScreen;
