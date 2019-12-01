import React from 'react';
import Logo from '../../assets/images/burger.jpg';
import classes from './Logo.css';
const logo=(props)=>{
    return(
<div className={classes.Logo} style={{height:props.height}}>
    <img src={Logo}></img>
</div>
    );
};


export default logo;