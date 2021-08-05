import logo from '../logo.svg';
import {createUseStyles} from 'react-jss';
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
    justifyContent: 'center',
    "align-self": "center"
  },
  button: {
    margin: '0.25em'
  }
});

function Header() {
  const classes = useStyles();
  return (
    <header className={classes.main}>
      <div className={classes.image}>
        <img src={logo} alt="logo"/>
      </div>
      <div className={classes.links}>
        <nav>
          <Link to="/">
            <Button className={classes.button}>Home</Button>
          </Link>
          {/*<Link to="/design"className={classes.link}>Design</Link>*/}
          <Link to="/engineeringDesign">
            <Button className={classes.button}>Engineering Design</Button>
          </Link>
          <Link to="/manufacturing">
            <Button className={classes.button}>Manufacturing</Button>
          </Link>
          <Link to="/contact">
            <Button className={classes.button}>Contact</Button>
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
