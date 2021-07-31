import {createUseStyles} from 'react-jss';
import { classicNameResolver } from 'typescript';
import copy from '../copy.json';

function listItems(data){
  return(data.map((d) => <li>{d}</li>));
}

const useStyles = createUseStyles({
  material: {
    textAlign: 'left'
  }
});

function Capabilities() {
  const classes = useStyles();
  return (
    <div>
      <div>
        <h3>Steel</h3>
        <ul className = {classes.material}>{listItems(copy.Capabilities.Materials.Steel)}</ul>
      </div>
      <div>
        <h3>Aluminum</h3>
        <ul className = {classes.material}>{listItems(copy.Capabilities.Materials.Aluminum)}</ul>
      </div>
      <div>
        <h3>Brass and Bronze</h3>
        <ul className = {classes.material}>{listItems(copy.Capabilities.Materials.BrassBronze)}</ul>
      </div>
      <div>
        <h3>Plastics</h3>
        <ul className = {classes.material}>{listItems(copy.Capabilities.Materials.Plastics)}</ul>
      </div>
    </div>
  );
}

export default Capabilities;