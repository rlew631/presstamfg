import {Link} from "react-router-dom";
import {createUseStyles} from 'react-jss';
import { Container, Row, Col } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, /*CardSubtitle,*/
  Button
} from 'reactstrap';
import copy from '../copy.json';

import miller from "../assets/Miller.png";

function listItems(data){
  return(data.map((d) => <li>{d}</li>));
}

const useStyles = createUseStyles({
  materialFinishes: {
    textAlign: 'left'
  }
});

function ManufacturingWelding() {
  const classes = useStyles();
  return (
    <nav>
      <h1>What We Do</h1>
      {copy.Manufacturing.Statement}
      <Container>
        <Row justify="stretch"> {/* doesn't seem to work like flexbox stretch */}
          <Col lg="3" md="6">
            <Card>
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
          <Col>
            <h2>Materials (Welding)</h2>
            <ul className = {classes.materialFinishes}>
              {listItems(copy.Manufacturing.Services.Welding.Materials)}
            </ul>
          </Col>
        </Row>
      </Container>
    </nav>
  );
}

export default ManufacturingWelding;