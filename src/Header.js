import logo from './logo.svg';
import {createUseStyles} from 'react-jss';

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
        <a href="./about" className={classes.link}>About Us</a>
        <a href="./capabilities" className={classes.link}>Capabilities</a>
        <a href="./contact" className={classes.link}>Contact</a>
      </div>
    </header>
  );
}

export default Header;
