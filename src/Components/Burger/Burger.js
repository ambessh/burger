import React from 'react';
import classes from './Burger.css';
import BurgerIngredients from './BurgerIngredients/BurgerIngredients';
const burger=(props)=>{
  
    let ingredientsMap=Object.keys(props.ingredients).map(elKey=>{
        return [...Array(props.ingredients[elKey])].map((_,index)=>{
            return <BurgerIngredients key={elKey+index} type={elKey}></BurgerIngredients>
        });
    }).reduce((accumulator,sum)=>{
      return accumulator.concat(sum);
    },[]);

    if(ingredientsMap.length===0)
    {
       ingredientsMap=<p>please start filling!</p>
    }
    return(
        <div className={classes.Burger}>
        <BurgerIngredients type='breadTop'></BurgerIngredients>
        {ingredientsMap}
        <BurgerIngredients type='breadBottom'></BurgerIngredients>
       </div> 
    );
    
}

export default burger;