import {createUseStyles} from 'react-jss';
import { Container, Row, Col } from 'reactstrap';
import copy from '../copy.json';

function listItems(data){
  return(data.map((d) => <li>{d}</li>));
}

const useStyles = createUseStyles({
  materialFinishes: {
    textAlign: 'left'
  },

});

function Manufacturing() {
  const classes = useStyles();
  return (
    <div>
      <h1>What we do</h1>
      {copy.Manufacturing.Statement}
      <Container>
      <h2>Materials</h2>
        <Row>
          <Col>
            <h3>Steel</h3>
            <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Materials.Steel)}</ul>
          </Col>
          <Col>
            <h3>Aluminum</h3>
            <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Materials.Aluminum)}</ul>
          </Col>
          <Col>
            <h3>Brass and Bronze</h3>
            <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Materials.BrassBronze)}</ul>
          </Col>
          <Col>
            <h3>Plastics</h3>
            <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Materials.Plastics)}</ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2>Finishes</h2>
        <Row justify="center">
          <Col lg={{size: 4, offset: 2}} md={{size: 10, offset:1}}>
            <h3>Anodized</h3>
            <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Finishes.Anodized)}</ul>
          </Col>
          <Col lg="4" md={{size:10, offset:1}}>
            <h3>Other</h3>
            <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Finishes.Other)}</ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Manufacturing;