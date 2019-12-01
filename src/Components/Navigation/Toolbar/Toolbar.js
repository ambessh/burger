import React from 'react';
import classes from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

const toolbar =(props)=>{
    return(
<div className={classes.Toolbar}>
    <button onClick={props.toggleSideDrawer}>SideDrawer</button>
    <div className={classes.Logo}>
    <Logo></Logo>
    </div>
    <nav className={classes.DesktopOnly}>
        <NavigationItems/>
    </nav>
</div>
    );
}

export default toolbar;