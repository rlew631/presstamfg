import {createUseStyles} from 'react-jss';
import { Container, Row, Col } from "reactstrap";
import copy from '../copy.json';

const useStyles = createUseStyles({
  info: {
    "align-self": "flex-end"
  }
});


function Contact() {
  const classes = useStyles();
  return(
    <div>
      <Container>
        <Row className={classes.info}>
          <Col lg={{size: 5, offset: 1}}>
            <div align="left">
              Email: {copy.Contact.Email}
              <br></br>
              Phone: {copy.Contact.Phone}
              <br></br>
              Address: {copy.Contact.Address}
            </div>
          </Col>
          <Col lg="5">
            <h1>Put in an inquiry form here</h1>
            line one <br></br>
            line two <br></br>
            line three <br></br>
            line four <br></br>
            line five <br></br>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;