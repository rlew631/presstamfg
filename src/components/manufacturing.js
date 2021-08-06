import {Link} from "react-router-dom";
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

const useStyles = createUseStyles({
  card: {
    height:"100%"
  }
});

function Manufacturing() {
  const classes = useStyles();
  return (
    <nav>
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
                <Link to="/manufacturing-machining">
                  <Button>Find out more</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card className={classes.card}>
              <CardImg top width="100%" src={stratysis} alt="Stratysis SLA 3D Printer" />
              <CardBody>
                <CardTitle tag="h3">3D Printing</CardTitle>
                <CardText>{copy.Manufacturing.Services.Printing.Statement}</CardText>
                <Link to="/manufacturing-printing">
                  <Button>Find out more</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card className={classes.card}>
              <CardImg top width="100%" src={trotec} alt="Trotec laser cutter" />
              <CardBody>
                <CardTitle tag="h3">Laser Cutting</CardTitle>
                <CardText>{copy.Manufacturing.Services.LaserCutting.Statement}</CardText>
                <Link to="/manufacturing-laser">
                  <Button>Find out more</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
          <Col lg="3" md="6">
            <Card className={classes.card}>
              <CardImg top width="100%" src={miller} alt="miller MIG/TIG welder" />
              <CardBody>
                <CardTitle tag="h3">Welding</CardTitle>
                <CardText>{copy.Manufacturing.Services.Welding.Statement}</CardText>
                <Link to="/manufacturing-welding">
                  <Button>Find out more</Button>
                </Link>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default Manufacturing;