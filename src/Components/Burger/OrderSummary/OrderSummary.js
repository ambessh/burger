import React from 'react';
import Auxiliary from '../../../hoc/Auxiliary';

const orderSummmary =(props)=>{
    const OrderSummary=Object.keys(props.ingredients).map(elKey=>{
        return <li key={elKey}><span style={{textTransform:'capitalize'}} >{elKey}:{props.ingredients[elKey]}</span></li>
        })
return(
<Auxiliary>
   {OrderSummary}
</Auxiliary>
);
}

export default orderSummmary;