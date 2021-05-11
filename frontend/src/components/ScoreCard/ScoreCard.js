import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./ScoreCard.css";

const ScoreCard = () => {
  return (
    <>
      <Row>
        <Col className="d-flex justify-content-left mt-3 ml-5">
          <h4>Augusta National</h4>
        </Col>
      </Row>
      <Container fluid className="scoreCardWrapper mt-5">
        <Row className="scoreCardRow holeRow">
          <Col style={{ border: "none" }}>
            <span></span>
          </Col>
          <Col>1</Col>
          <Col>2</Col>
          <Col>3</Col>
          <Col>4</Col>
          <Col>5</Col>
          <Col>6</Col>
          <Col>7</Col>
          <Col>8</Col>
          <Col>9</Col>
          <Col>OUT</Col>
          {/* <Col>10</Col>
          <Col>11</Col>
          <Col>12</Col>
          <Col>13</Col>
          <Col>14</Col>
          <Col>15</Col>
          <Col>16</Col>
          <Col>17</Col>
          <Col>18</Col> */}
        </Row>
        <Row className="scoreCardRow distanceRow">
          <Col>
            <span>distance</span>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          {/* <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col> */}
        </Row>
        <Row className="scoreCardRow parRow">
          <Col>
            <span>par</span>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          {/* <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col> */}
        </Row>
        <Row className="scoreCardRow scoreRow">
          <Col>
            <span className="scoreText">score</span>
          </Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          {/* <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col>
          <Col></Col> */}
        </Row>
      </Container>
    </>
  );
};

export default ScoreCard;
