import React from 'react';
import classes from './BuildControl.css';
const buildControl=(props)=>{
return(
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button onClick={props.addMore} className={classes.More}  >More</button>
        <button onClick={props.doLess}  className={classes.Less} disabled={props.disabled}>less</button>
    </div>
);
}

export default buildControl;