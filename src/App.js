import {createUseStyles} from 'react-jss';
import Header from './components/header';
import Home from './components/home'
// import Design from './components/design';
import Design from './components/design';
import Manufacturing from './components/manufacturing';
import Contact from './components/contact';
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
            {/*<Route path="/design" component={Design}></Route>*/}
            <Route path="/design" component={Design}></Route>
            <Route path="/manufacturing" component={Manufacturing}></Route>
            <Route path="/contact" component={Contact}></Route>
          </Switch>
        </body>
      </Router>
    </div>
  );
}

export default App;

