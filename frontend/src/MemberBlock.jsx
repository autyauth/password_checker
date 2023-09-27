import { Col } from "react-bootstrap";

export function MemberBlock({ name,studentID, imgSrc }) {
  return (

    <Col md={6} className=" memberBlock rounded-pill d-flex align-items-center mx-3 my-3  bg-secondary">
      <img
        src={imgSrc}
        className="memberpic d-inline  mw-25 px-3 rounded-circle "
      />
      <h5 className="text-primary d-inline fw-bold px-3">{studentID}</h5>
      <h5 className="text-primary d-inline fw-bold px-3">{name}</h5>
    </Col>
  );
}
