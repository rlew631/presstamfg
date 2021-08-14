import logo from '../logo.svg';
import {createUseStyles} from 'react-jss';
import {Container, Row, Col} from 'reactstrap';
import {Link} from "react-router-dom";
import {Button} from 'reactstrap';

const useStyles = createUseStyles({
  main: {
    backgroundColor: '#535D8D',
    display: 'flex'
  },
  image: {
    margin: 10,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0
  },
  links: {
    margin: 10,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    flexWrap: 'wrap',
    justifyContent: 'right',
    flexDirection: "row"
  },
  button: {
    margin: '0.25em'
  }
});

function Header() {
  const classes = useStyles();
  return (
    <header className={classes.main}>
      <Container>
        <Row>
        <Col lg="7">
          <div className={classes.image}>
            <img src={logo} alt="logo"/>
          </div>
        </Col>
        <Col lg="5">
          <nav className={classes.links}>
            <Row>
              <Col md="5" className={classes.button}>
                <Link to="/">
                  <Button>Home</Button>
                </Link>
              </Col>
              <Col md="5" className={classes.button}>
                <Link to="/design">
                  <Button>Design</Button>
                </Link>
              </Col>
              <Col md="5" className={classes.button}>
                <Link to="/manufacturing">
                  <Button>Manufacturing</Button>
                </Link>
              </Col>
              <Col md="5" className={classes.button}>
                <Link to="/contact">
                  <Button>Contact</Button>
                </Link>
              </Col>
            </Row>
          </nav>
        </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;
