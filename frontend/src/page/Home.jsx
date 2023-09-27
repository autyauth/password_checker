import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MemberBlock } from "../MemberBlock";
export function Home() {
  return (
    <Container className="homeCon">
      <Row className="h-25 align-items-end">
        <Col>
          <h2 className="text-primary text-center">
            Welcome to the Theory of Computation Assignment
          </h2>
          <h3 className="text-center">
            How long Hacker used to crack your password?
          </h3>
          <h6 className="text-center my-5">
            Assignment project for Theory of Computation Semester 1 of 2566
          </h6>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col className="text-center">
          <Button className="bg-primary ">
            <Link to={"passwordchecker"} className="text-light">
              Let’s check
            </Link>
          </Button>
        </Col>
      </Row>
      <Row className=" justify-content-center  w-100 my-5">
        <h2 className="text-primary my-5">Member</h2>
        <MemberBlock
          name={"Kadin Vetrovsk"}
          imgSrc={
            "https:media.discordapp.net/attachments/1107404153499339375/1138140872265965669/image.png"
          }
        />
        <MemberBlock
          name={"Kadin Vetrovsk"}
          imgSrc={
            "https:media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
          }
        />
        <MemberBlock
          name={"Kadin Vetrovsk"}
          imgSrc={
            "https:media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
          }
        />
        <MemberBlock
          name={"Kadin Vetrovsk"}
          imgSrc={
            "https:media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
          }
        />
        <MemberBlock
          name={"Kadin Vetrovsk"}
          imgSrc={
            "https:media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
          }
        />
        <MemberBlock
          name={"Kadin Vetrovsk"}
          imgSrc={
            "https:media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
          }
        />
        <MemberBlock
          name={"Kadin Vetrovsk"}
          imgSrc={
            "https:media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
          }
        />
        <MemberBlock
          name={"Kadin Vetrovsk"}
          imgSrc={
            "https:media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
          }
        />
        <MemberBlock
          name={"Kadin Vetrovsk"}
          imgSrc={
            "https:media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
          }
        />
        <MemberBlock
          name={"Kadin Vetrovsk"}
          imgSrc={
            "https:media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
          }
        />
      </Row>
    </Container>
  );
}
