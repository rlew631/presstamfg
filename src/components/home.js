import {createUseStyles} from 'react-jss';
import { Container, Row, Col } from 'reactstrap';
import copy from '../copy.json';

function listItems(data){
  return(data.map((d) => <li>{d}</li>));
}

const useStyles = createUseStyles({
  topCards: {
    textAlign: 'left'
  },
});

// There's nothing in here for the bottom cards yet!!!!


function Home() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Row justify="center">
          <Col lg={{size: 10, offset: 1}}>
            <h1>What We Do</h1>
            {copy.Home.WhatWeDoStatement}
          </Col>
          <Col lg={{size: 10, offset: 1}}>
            <h1>About The Team</h1>
            {copy.Home.AboutUsStatement}
          </Col>
          <Col lg={{size: 10, offset: 1}}>
            <h1>Why Use Pressta</h1>
            {copy.Home.WhyUsePresstaStatement} 
          </Col>
          <Col lg={{size: 10, offset: 1}}>
            <h1>Industries Served</h1>
            {copy.Home.IndustriesServed}
          </Col>
          <Col lg={{size: 10, offset: 1}}>
            <h1>Classifications and Certifications</h1>
            {copy.Home.ClassificationsCertifications}
            <br></br>
            We are registered on SAM.gov as Fresh Press LLC and DUNS / CAGE codes are 118160742 and 92SM7 respecively.
          </Col>
        </Row>
      </Container>

      <Container>
        <br></br><br></br><br></br><br></br>
        <h2>Services</h2>
        <Row justify="center">
          <Col lg={{size: 3, offset: 1.5}} md={{size: 10, offset:1}}>
            <h3>Design</h3>
            <div className = {classes.topCards}>
              {copy.Home.Services.Design}
            </div>
          </Col>
          <Col lg="3" md={{size:10, offset:1}}>
            <h3>Engineering</h3>
            <div className = {classes.topCards}>
              {copy.Home.Services.Engineering}
            </div>
          </Col>
          <Col lg="3" md={{size:10, offset:1}}>
            <h3>Manufacturing</h3>
            <div className = {classes.topCards}>
              {copy.Home.Services.Manufacturing}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;