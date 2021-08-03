import {createUseStyles} from 'react-jss';
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
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
        <h2>Services</h2>
        <Row justify="center">
          <Col>
            <h3>Machining</h3>
            <div>
              {copy.Manufacturing.Services.Machining.Statement}
            </div>
          </Col>
          <Col>
            <h3>3D Printing</h3>
            <div>
            {copy.Manufacturing.Services.Printing.Statement}
            </div>
          </Col>
          <Col>
            <h3>Laser Cutting</h3>
            <div>
            {copy.Manufacturing.Services.LaserCutting.Statement}
            </div>
          </Col>
          <Col>
            <h3>Welding</h3>
            <div>
            {copy.Manufacturing.Services.Welding.Statement}
            </div>
          </Col>
        </Row>
      </Container>
      <Container>
      <h2>Materials</h2>
        <Row>
          <Col>
            <h3>Steel</h3>
            <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Services.Machining.Materials.Steel)}</ul>
          </Col>
          <Col>
            <h3>Aluminum</h3>
            <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Services.Machining.Materials.Aluminum)}</ul>
          </Col>
          <Col>
            <h3>Brass and Bronze</h3>
            <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Services.Machining.Materials.BrassBronze)}</ul>
          </Col>
          <Col>
            <h3>Plastics</h3>
            <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Services.Machining.Materials.Plastics)}</ul>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2>Finishes</h2>
        <Row justify="center">
          <Col lg={{size: 4, offset: 2}} md={{size: 10, offset:1}}>
            <h3>Anodized</h3>
            <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Services.Machining.Finishes.Anodized)}</ul>
          </Col>
          <Col lg="4" md={{size:10, offset:1}}>
            <h3>Other</h3>
            <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Services.Machining.Finishes.Other)}</ul>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Manufacturing;