import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from'./BuildControls.css';
import Auxiliary from '../../../hoc/Auxiliary';

const buildControls=(props)=>{

let control=[
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'},
    {label:'Salad',type:'salad'}
];

const BuildControlss=control.map(elKey=>{
   
    return <BuildControl key={elKey.label} label={elKey.label} 
    addMore={props.addMore.bind(this,elKey.type)} doLess={props.doLess.bind(this,elKey.type)} type={elKey.type} disabled={props.disabled[elKey.type]}></BuildControl>
})

    return(
<Auxiliary>
<div className={classes.BuildControls}>
<p><em>Current Price is $:</em><strong>{props.currentPrice.toFixed(2)}</strong> </p>
   {BuildControlss}
   <button className={classes.OrderButton} onClick={props.orderShow} disabled={!props.disabledOrderButton}>ORDER NOW</button>
</div>

</Auxiliary>
    );

}

export default buildControls;