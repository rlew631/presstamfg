import {createUseStyles} from 'react-jss';
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, /*CardSubtitle,*/
  Button
} from 'reactstrap';
import copy from '../copy.json';

import haas from "../assets/Haas.png";
import stratysis from "../assets/Stratysis.png";
import trotec from "../assets/Trotec.png";
import miller from "../assets/Miller.png";

import aluminum from "../assets/Aluminum.svg";
import steel from "../assets/Steel.svg"
import brass from "../assets/Brass.svg";
import plastic from "../assets/Plastic.svg"

function listItems(data){
  return(data.map((d) => <li>{d}</li>));
}

const useStyles = createUseStyles({
  materialFinishes: {
    textAlign: 'left'
  },
  card: {
    height:"100%"
  },
  materialIcon: {
    height:"1em" //still needs to be raised slightly to line up with heading but it's getting better
  },
  cnc: {
    "flex-wrap":"wrap"
  }
});

function Manufacturing() {
  const classes = useStyles();
  return (
    <div>
      <h1>What We Do</h1>
      {copy.Manufacturing.Statement}
      <Container>
        <h2>Services</h2>
        <Row justify="stretch"> {/* doesn't seem to work like flexbox stretch */}
          <Col lg="3" md="6">
            <Card className={classes.card}>
              <CardImg top width="100%" src={haas} alt="Haas VF2SSYT CNC Machine" />
              <CardBody>
                <CardTitle tag="h3">Machining</CardTitle>
                <CardText>{copy.Manufacturing.Services.Machining.Statement}</CardText>
                <Button>Find out more</Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card className={classes.card}>
              <CardImg top width="100%" src={stratysis} alt="Stratysis SLA 3D Printer" />
              <CardBody>
                <CardTitle tag="h3">3D Printing</CardTitle>
                <CardText>{copy.Manufacturing.Services.Printing.Statement}</CardText>
                <Button>Find out more</Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card className={classes.card}>
              <CardImg top width="100%" src={trotec} alt="Trotec laser cutter" />
              <CardBody>
                <CardTitle tag="h3">Laser Cutting</CardTitle>
                <CardText>{copy.Manufacturing.Services.LaserCutting.Statement}</CardText>
                <Button>Find out more</Button>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card className={classes.card}>
              <CardImg top width="100%" src={miller} alt="miller MIG/TIG welder" />
              <CardBody>
                <CardTitle tag="h3">Welding</CardTitle>
                <CardText>{copy.Manufacturing.Services.Welding.Statement}</CardText>
                <Button>Find out more</Button>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
      <Container className={classes.cnc}>
        <Row>
          <Col md="6">
            <h2>Materials (Machining)</h2>
            Maybe put in something saying to contact us for questions regarding titanium and other exotic metals.
            <Row>
              <Col md="6">
                <h3><img src={steel} className={classes.materialIcon}></img> Steel</h3>
                <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Services.Machining.Materials.Steel)}</ul>
              </Col>
              <Col md="6">
                <h3><img src={aluminum} className={classes.materialIcon}></img> Aluminum</h3>
                <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Services.Machining.Materials.Aluminum)}</ul>
              </Col>
              <Col md="6">
                <h3><img src={brass} className={classes.materialIcon}></img> Brass and Bronze</h3>
                <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Services.Machining.Materials.BrassBronze)}</ul>
              </Col>
              <Col md="6">
                <h3><img src={plastic} className={classes.materialIcon}></img> Plastic</h3>
                <ul className = {classes.materialFinishes}>{listItems(copy.Manufacturing.Services.Machining.Materials.Plastic)}</ul>
              </Col>
            </Row>
            </Col>
            <Col md="6">
            <h2>Finishes</h2>
            <Row justify="center">
              <Col lg={{size: 4, offset: 2}} md={{size: 10, offset:1}}>
                <h3>Anodized</h3>
                <ul className = {classes.materialFinishes}>
                  {listItems(copy.Manufacturing.Services.Machining.Finishes.Anodized)}
                </ul>
              </Col>
              <Col lg="4" md={{size:10, offset:1}}>
                <h3>Other</h3>
                <ul className = {classes.materialFinishes}>
                  {listItems(copy.Manufacturing.Services.Machining.Finishes.Other)}
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      <Container>
        <h2>Materials (3D Printing)</h2>
          <ul className = {classes.materialFinishes}>
            {listItems(copy.Manufacturing.Services.Printing.Materials)}
          </ul>
      </Container>
      <Container>
        <h2>Materials (Laser Cutting)</h2>
          Maybe put something here about how some materials can be engraved but not cut in the list
          <ul className = {classes.materialFinishes}>
            {listItems(copy.Manufacturing.Services.LaserCutting.Materials)}
          </ul>
      </Container>
      <Container>
        <h2>Materials (Welding)</h2>
          <ul className = {classes.materialFinishes}>
            {listItems(copy.Manufacturing.Services.Welding.Materials)}
          </ul>
      </Container>
    </div>
  );
}

export default Manufacturing;