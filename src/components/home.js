import {createUseStyles} from 'react-jss';
import {Container, Row, Col } from 'reactstrap';
import copy from '../copy.json';

const useStyles = createUseStyles({
  statement: {
    textAlign: 'left'
  },
  main: {
    paddingTop: 90
  }
});

// There's nothing in here for the bottom cards yet!!!!


function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <Row>
        <Col lg={{size: 10, offset: 1}}>
          <h1>What We Do</h1>
          <p className = {classes.statement}>
            {copy.Home.WhatWeDoStatement}
          </p>
        </Col>
        <Col lg={{size: 10, offset: 1}}>
          <h1>About The Team</h1>
          <p className = {classes.statement}>
            {copy.Home.AboutUsStatement}
          </p>
        </Col>
        <Col lg={{size: 10, offset: 1}}>
          <h1>Why Use Pressta</h1>
          <p className = {classes.statement}>
            {copy.Home.WhyUsePresstaStatement} 
          </p>
        </Col>
        <Col lg={{size: 10, offset: 1}}>
          <h1>Industries Served</h1>
          <p className = {classes.statement}>
            {copy.Home.IndustriesStatement}
          </p>
        </Col>
        <Col lg={{size: 10, offset: 1}}>
          <h1>Classifications and Certifications</h1>
          <p className = {classes.statement}>
            {copy.Home.ClassificationsCertifications}
            <br></br><br></br>
            We are registered on SAM.gov as Fresh Press LLC and DUNS / CAGE codes are 118160742 and 92SM7 respecively.
            <br></br><br></br>
            Pressta has been in business since 2017.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;