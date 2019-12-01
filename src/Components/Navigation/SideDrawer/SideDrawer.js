import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import classes from './SideDrawer.css';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';


const sideDrawer =(props)=>{
    let styling=[classes.SideDrawer,classes.Close];
    if(props.showBackdrop)
    {
        styling=[classes.SideDrawer,classes.Open]
    }
return(
    <Auxiliary >
       
        <Backdrop showBackdrop={props.showBackdrop} removeBackDrop={props.removeBackDrop} ></Backdrop>
   <div className={styling.join(' ')}>
        <div className={classes.Logo}><Logo /></div>
        <nav> <NavigationItems/></nav> 
    </div>
    
    </Auxiliary>
);
}



export default sideDrawer;