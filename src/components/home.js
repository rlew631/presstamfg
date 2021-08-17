import {createUseStyles} from 'react-jss';
import {Container, Row, Col } from 'reactstrap';
import copy from '../copy.json';
import adapter from '../assets/oil_adapter.jpg';
import flange from '../assets/AluminumFlange.jpg';
import plug from '../assets/BrassPlug.jpg';
import cams from '../assets/AluminumCams.png'
import clasps from '../assets/StainlessClasps.jpg'

const useStyles = createUseStyles({
  statement: {
    textAlign: 'left'
  },
  main: {
    paddingTop: 90
  },
  pictures: {
    width: '100%'
  },
  textAlign: {
    paddingTop: '3em',
    paddingBottom: '1em'
  }
});

function Home() {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      <Col lg={{size: 10, offset: 1}}>
        <Row>
          <Col lg="5" className={classes.textAlign}>
            <h1>What We Do</h1>
            <p className = {classes.statement}>
              {copy.Home.WhatWeDoStatement}
            </p>
          </Col>
          <Col lg="7">
            <p>
              <img src={flange} className= {classes.pictures}/>
            </p>
          </Col>
        </Row>
        <Row className='flex-row-reverse'>
          <Col lg='5' className={classes.textAlign}>
            <h1>About The Team</h1>
            <p className = {classes.statement}>
              {copy.Home.AboutUsStatement}
            </p>
          </Col>
          <Col lg='7'>
            <p>
              <img src={plug} className= {classes.pictures}/>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg='5' className={classes.textAlign}>
            <h1>Why Use Pressta</h1>
            <p className = {classes.statement}>
              {copy.Home.WhyUsePresstaStatement} 
            </p>
          </Col>
          <Col lg='7'>
            <p>
              <img src={adapter} className= {classes.pictures}/>
            </p>
          </Col>
        </Row>
        <Row className='flex-row-reverse'>
          <Col lg='5' className={classes.textAlign}>
            <h1>Industries Served</h1>
            <p className = {classes.statement}>
              {copy.Home.IndustriesStatement}
            </p>
          </Col>
          <Col lg='7'>
            <p>
              <img src={cams} className= {classes.pictures}/>
            </p>
          </Col>
        </Row>
        <Row>
          <Col lg='5' className={classes.textAlign}>
            <h1>Classifications and Certifications</h1>
            <p className = {classes.statement}>
              {copy.Home.ClassificationsCertifications}
              <br /><br />
              We are registered on SAM.gov as Fresh Press LLC and DUNS / CAGE codes are 118160742 and 92SM7 respecively.
              <br></br><br></br>
              Pressta has been in business since 2017.
            </p>
          </Col>
          <Col lg='7'>
            <p>
              <img src={clasps} className= {classes.pictures}/>
            </p>
          </Col>
        </Row>
      </Col>
    </Container>
  );
}

export default Home;