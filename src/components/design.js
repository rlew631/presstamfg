import {createUseStyles} from 'react-jss';
import { Container, Row, Col } from 'reactstrap';
import copy from '../copy.json';

function listItems(data){
  return(data.map((d) => <li>{d}</li>));
}

const useStyles = createUseStyles({
  services: {
    textAlign: 'left'
  },
  statement: {
    textAlign: 'left'
  }
});

function Design() {
  const classes = useStyles();
  return (
    <Container>
    <br></br>
    <p className = {classes.statement}>
      {copy.Design.Statement}
    </p>
    <h2>Services</h2>
      <Row>
        <Col lg="3" md={{size: 10, offset:1}}>
          <h3>Mechanical</h3>
          <ul className = {classes.services}>{listItems(copy.Design.Services.Mechanical)}</ul>
        </Col>
        <Col lg="3" md={{size:10, offset:1}}>
          <h3>Electrical</h3>
          <ul className = {classes.services}>{listItems(copy.Design.Services.Electrical)}</ul>
        </Col>
        <Col lg="3" md={{size:10, offset:1}}>
          <h3>Product Design</h3>
          <ul className = {classes.services}>{listItems(copy.Design.Services.Design)}</ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Design;