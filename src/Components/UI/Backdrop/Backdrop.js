import React from 'react';
import classes from './Backdrop.css';
import Auxiliary from '../../../hoc/Auxiliary';

const backdrop=(props)=>{
return(
    <Auxiliary>
   {props.showBackdrop ?<div className={classes.Backdrop}  onClick={props.removeBackDrop}></div>:null}
   </Auxiliary>
);
}

export default backdrop;