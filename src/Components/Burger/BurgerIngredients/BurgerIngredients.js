import React from 'react';
import classes from './BurgerIngredients.css'

const burgerIngredients =(props)=>{
    let ingredients=null;
  
        switch (props.type) {
            case ('breadTop'):
                ingredients=<div className={classes.breadTop}></div>
                break;
        
            case ('cheese'):
                ingredients=<div className={classes.cheese}></div>
                break;
        
            case ('meat'):
                ingredients=<div className={classes.meat}></div>
                break;
        
            case ('salad'):
                ingredients=<div className={classes.salad}></div>
                break;
        
            case ('breadBottom'):
                ingredients=<div className={classes.breadBottom}></div>
                break;
        
            default:
                break;
        }
    
    return ingredients;
}


export default burgerIngredients;