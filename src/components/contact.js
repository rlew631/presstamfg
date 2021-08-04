import { Container, Row, Col } from "reactstrap";
import copy from '../copy.json';

function Contact() {
  return(
    <div>
      <Container>
        <Row>
          <Col>
            <div align="left">
              Email: {copy.Contact.Email}
              <br></br>
              Phone: {copy.Contact.Phone}
              <br></br>
              Address: {copy.Contact.Address}
            </div>
          </Col>
          <Col>
            <h1>Put in an inquiry form here</h1>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;