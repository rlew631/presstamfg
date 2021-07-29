import logo from './logo.svg';
import {createUseStyles} from 'react-jss';

const useStyles = createUseStyles({
  main: {
    textAlign: 'center'
  },
  header: {
    backgroundColor: '#535D8D',
    display: 'flex',
    '& div': {
      margin: 10,
      flexGrow: 1,
      flexShrink: 1,
      flexBasis: 0
    },
  },
  links: {
    flexWrap: 'wrap',
    justifyContent: 'center',
    '> a': {
      padding: '1em'
    },
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <header className={classes.header}>
        <div>
          <img src={logo} alt="logo" />
        </div>
        <div className={classes.links}>
          <a href="./about">About Us</a>
          <a href="./capabilities">Capabilities</a>
          <a href="./contact">Contact</a>
        </div>
      </header>
      <body>
        Here's the Body
      </body>
    </div>
  );
}

export default App;
