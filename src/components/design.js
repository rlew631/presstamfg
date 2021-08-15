import {createUseStyles} from 'react-jss';
import {
  Card,
  // CardImg,
  CardText,
  CardBody,
  CardTitle,
  // CardSubtitle,
  Container,
  Row,
  Col
} from 'reactstrap';
import copy from '../copy.json';

function listItems(data){
  return(data.map((d) => <li>{d}</li>));
}

const useStyles = createUseStyles({
  main: {
    paddingTop: 90
  },
  cardCol: {
    paddingBottom: "2em"
  },
  card: {
    height:"100%",
  },
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
    <Container className={classes.main}>
      <Row>
        <Col lg={{size: 10, offset: 1}}>
          <p className = {classes.statement}>
            {copy.Design.Statement}
          </p>
        </Col>
      </Row>
    <h2>Services</h2>
      <Col lg={{size: 10, offset: 1}}>
        <Row>
          <Col lg="4" md="12" className={classes.cardCol}>
            <Card className={classes.card}>
              <CardBody>
                <CardTitle tag="h3">Mechanical</CardTitle>
                <CardText>
                  <ul className = {classes.services}>{listItems(copy.Design.Services.Mechanical)}</ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg = "4" md="12" className={classes.cardCol}>
            <Card className={classes.card}>
              <CardBody>
                <CardTitle tag="h3">Electrical</CardTitle>
                <CardText>
                  <ul className = {classes.services}>{listItems(copy.Design.Services.Electrical)}</ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
          <Col lg="4" md="12" className={classes.cardCol}>
            <Card className={classes.card}>
              <CardBody>
                <CardTitle tag="h3">Product Design</CardTitle>
                <CardText>
                  <ul className = {classes.services}>{listItems(copy.Design.Services.Design)}</ul>
                </CardText>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Col>
      
    </Container>
  );
}

export default Design;