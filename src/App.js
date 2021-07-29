import {createUseStyles} from 'react-jss';
import Header from './Header';

const useStyles = createUseStyles({
  main: {
    textAlign: 'center'
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Header/>
      <body>
        Here's the Body
      </body>
    </div>
  );
}

export default App;
