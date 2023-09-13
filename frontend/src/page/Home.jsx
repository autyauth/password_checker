import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MemberBlock } from "../MemberBlock";
export function Home() {
  return (
    <Container className="homeCon">
      <div className="d-flex flex-column  justify-content-center align-items-center  h-100">
        {/* <div className="col-md-8 ">
          <p className="text-center"> How long Hacker cracked your password?</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
            purus nec dui ullamcorper, id porta eros pharetra. Ut sagittis vitae
            erat in lacinia. Nullam at aliquet lacus
          </p>
        </div>
        <div className="col-8-md">
          <Button className="bg-primary"> <Link to={"passwordchecker"} className="text-light">Let’s check</Link></Button>
        </div> */}
        <Row className="d-flex  d-flex align-items-end justify-content-center  h-25 w-50 mx-auto">
          <Col md={8}>
            <p className="text-center">
              {" "}
              How long Hacker cracked your password?
            </p>
            <p className="text-center">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis purus nec dui ullamcorper, id porta eros pharetra. Ut
              sagittis vitae erat in lacinia. Nullam at aliquet lacus
            </p>
          </Col>
        </Row>
        <Row>
          <Col>
            <Button className="bg-primary">
              {" "}
              <Link to={"passwordchecker"} className="text-light">
                Let’s check
              </Link>
            </Button>
          </Col>
        </Row>
      </div>
      <div className="d-flex   align-items-center  h-100 gap">
        <Row className="gap-4 justify-content-center h-75 w-100">
          <MemberBlock
            name={"Kadin Vetrovsk"}
            imgSrc={
              "https://media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
            }
          />
          <MemberBlock
            name={"Kadin Vetrovsk"}
            imgSrc={
              "https://media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
            }
          />
          <MemberBlock
            name={"Kadin Vetrovsk"}
            imgSrc={
              "https://media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
            }
          />
          <MemberBlock
            name={"Kadin Vetrovsk"}
            imgSrc={
              "https://media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
            }
          />
          <MemberBlock
            name={"Kadin Vetrovsk"}
            imgSrc={
              "https://media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
            }
          />
          <MemberBlock
            name={"Kadin Vetrovsk"}
            imgSrc={
              "https://media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
            }
          />
          <MemberBlock
            name={"Kadin Vetrovsk"}
            imgSrc={
              "https://media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
            }
          />
          <MemberBlock
            name={"Kadin Vetrovsk"}
            imgSrc={
              "https://media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
            }
          />
          <MemberBlock
            name={"Kadin Vetrovsk"}
            imgSrc={
              "https://media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
            }
          />
          <MemberBlock
            name={"Kadin Vetrovsk"}
            imgSrc={
              "https://media.discordapp.net/attachments/1107404152499339375/1138140872265965669/image.png"
            }
          />
        </Row>
      </div>
    </Container>
  );
}
