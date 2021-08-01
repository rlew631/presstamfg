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
});

function Engineering() {
  const classes = useStyles();
  return (
    <div>
      <h1>What we do</h1>
      {copy.Engineering.Statement}
      <Container>
      <h2>Services</h2>
      <h2>THIS IS ALL JUST FILLER FOR NOW</h2>
        <Row>
          <Col lg={{size: 4, offset: 2}} md={{size: 10, offset:1}}>
            <h3>Mechanical</h3>
            <ul className = {classes.services}>{listItems(copy.Engineering.Services.Mechanical)}</ul>
          </Col>
          <Col lg="4" md={{size:10, offset:1}}>
            <h3>Electrical</h3>
            <ul className = {classes.services}>{listItems(copy.Engineering.Services.Electrical)}</ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Engineering;