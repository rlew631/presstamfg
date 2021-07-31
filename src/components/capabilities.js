import {createUseStyles} from 'react-jss';
import { Container, Row, Col } from 'reactstrap';
import copy from '../copy.json';

function listItems(data){
  return(data.map((d) => <li>{d}</li>));
}

const useStyles = createUseStyles({
  material: {
    textAlign: 'left'
  }
});

function Capabilities() {
  const classes = useStyles();
  return (
    <Container>
      <Row>
        <Col>
          <h3>Steel</h3>
          <ul className = {classes.material}>{listItems(copy.Capabilities.Materials.Steel)}</ul>
        </Col>
        <Col>
          <h3>Aluminum</h3>
          <ul className = {classes.material}>{listItems(copy.Capabilities.Materials.Aluminum)}</ul>
        </Col>
        <Col>
          <h3>Brass and Bronze</h3>
          <ul className = {classes.material}>{listItems(copy.Capabilities.Materials.BrassBronze)}</ul>
        </Col>
        <Col>
          <h3>Plastics</h3>
          <ul className = {classes.material}>{listItems(copy.Capabilities.Materials.Plastics)}</ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Capabilities;