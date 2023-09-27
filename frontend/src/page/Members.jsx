import { Button, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { MemberBlock } from "../MemberBlock";

export function Members() {
  return (
    <Container className="homeCon h-75">
      <Row className=" justify-content-center  w-100 my-5 pt-5 ">
        <Col md={6} className="px-3 ">
          
          <div className="d-flex justify-content-end"><div className="flex-column d-flex justify-content-between ">
            <MemberBlock
              name={"สวรรษ  ลาภประเสริฐล้ำ"}
              imgSrc={
                "https:media.discordapp.net/attachments/1107404153499339375/1138140872265965669/image.png"
              }
              studentID={"61011085"}
            />
            <MemberBlock
              name={"สุนิสา มูลสวัสดิ์"}
              imgSrc={
                "https:media.discordapp.net/attachments/1107404153499339375/1138140872265965669/image.png"
              }
              studentID={"63015191"}
            />
            <MemberBlock
              name={"นันฑิกาณต์ แพร่ศิริรักษ์"}
              imgSrc={
                "https:media.discordapp.net/attachments/1107404153499339375/1138140872265965669/image.png"
              }
              studentID={"63015098"}
            />
            <MemberBlock
              name={"กิตติกรณ์ อำภัยรัตน์"}
              imgSrc={
                "https:media.discordapp.net/attachments/1107404153499339375/1138140872265965669/image.png"
              }
              studentID={"64010052"}
            />
            <MemberBlock
              name={"เกริกไกวัล สุพาเสพย์"}
              imgSrc={
                "https:media.discordapp.net/attachments/1107404153499339375/1138140872265965669/image.png"
              }
              studentID={"64010065"}
            />
            <MemberBlock
              name={"ณัฐพล เนื้อเย็น"}
              imgSrc={
                "https://cdn.britannica.com/33/238533-050-2E2D04F4/Indian-cobra-naja-naja-venonmous-snake-reptile-hood.jpg"
              }
              studentID={"64010247"}
            />
          </div></div>
        </Col>
        <Col md={6} className="px-3">
          <div className="flex-column d-flex justify-content-between h-100">
            <MemberBlock
              name={"ไททัศน์ กันทา"}
              imgSrc={
                "https:media.discordapp.net/attachments/1107404153499339375/1138140872265965669/image.png"
              }
              studentID={"64010298"}
            />
            <MemberBlock
              name={"ธนกาญจน์ กันไพเราะ"}
              imgSrc={
                "https:media.discordapp.net/attachments/1107404153499339375/1138140872265965669/image.png"
              }
              studentID={"64010309"}
            />
            <MemberBlock
              name={"ธนธร แตงอ่อน"}
              imgSrc={
                "https:media.discordapp.net/attachments/1107404153499339375/1138140872265965669/image.png"
              }
              studentID={"64010315"}
            />
            <MemberBlock
              name={"ธนากร รัตนพรชัย"}
              imgSrc={
                "https:media.discordapp.net/attachments/1107404153499339375/1138140872265965669/image.png"
              }
              studentID={"64010342"}
            />
            <MemberBlock
              name={"นีรชา เลาะหมัดจิตร"}
              imgSrc={
                "https:media.discordapp.net/attachments/1107404153499339375/1138140872265965669/image.png"
              }
              studentID={"64010444"}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
}
