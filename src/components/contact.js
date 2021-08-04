import {createUseStyles} from 'react-jss';
import { Container, Row, Col } from "reactstrap";
import copy from '../copy.json';

const useStyles = createUseStyles({
  info: {
    "align-self": "flex-end"
  },
  colKey: {
    textAlign: 'left'
  },
  colValue: {
    textAlign: 'left'
  }
});


function Contact() {
  const classes = useStyles();
  return(
    <div>
      <Container>
        <Row className={classes.info}>
          <Col lg={{size: 5, offset: 1}}>
            <Row>
              <Col className={classes.colKey}>Email: </Col>
              <Col className={classes.colValue}>{copy.Contact.Email}</Col>
            </Row>
            <Row>
              <Col className={classes.colKey}>Phone: </Col>
              <Col className={classes.colValue}>{copy.Contact.Phone}</Col>
            </Row>
            <Row>
              <Col className={classes.colKey}>Address: </Col>
              <Col className={classes.colValue}>{copy.Contact.Address}</Col>
            </Row>
          </Col>
          <Col lg="5">
            <h1>Put in an inquiry form here</h1>
            line one <br></br>
            line two <br></br>
            line three <br></br>
            line four <br></br>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Contact;