import logo from '../logo.svg';
import {createUseStyles} from 'react-jss';
import {Link} from "react-router-dom";

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
  },
  link: {
    padding: '1em'
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
          <Link to="/"className={classes.link}>Home</Link>
          <Link to="/design"className={classes.link}>Design</Link>
          <Link to="/engineering"className={classes.link}>Engineering</Link>
          <Link to="/manufacturing"className={classes.link}>Manufacturing</Link>
          <Link to="/contact"className={classes.link}>Contact</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
