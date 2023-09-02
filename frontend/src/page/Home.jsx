import { Button, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export function Home() {
  return (
    <Container className="homeCon">
      <div className="d-flex flex-column  justify-content-center align-items-center  h-100">
        <div className="col-md-8 ">
          <p className="text-center"> How long Hacker cracked your password?</p>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed mollis
            purus nec dui ullamcorper, id porta eros pharetra. Ut sagittis vitae
            erat in lacinia. Nullam at aliquet lacus
          </p>
        </div>
        <div className="col-8-md">
          <Button className="bg-primary"> <Link to={"passwordchecker"} className="text-light">Let’s check</Link></Button>
        </div>
      </div>
    </Container>
  );
}
