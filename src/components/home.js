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
      <h1>What we do</h1>
      {copy.Home.Statement}
      <Container>
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