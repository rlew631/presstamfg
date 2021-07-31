import {createUseStyles} from 'react-jss';
import Header from './header';
import Home from './home'
import Capabilities from './capabilities';
import Contact from './contact';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const useStyles = createUseStyles({
  main: {
    textAlign: 'center'
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      <Router>
        <Header/>
        <body>
          <Switch>
            <Route path="/" exact={true} component={Home} ></Route>
            <Route path="/capabilities" component={Capabilities}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </body>
      </Router>
    </div>
  );
}

export default App;

