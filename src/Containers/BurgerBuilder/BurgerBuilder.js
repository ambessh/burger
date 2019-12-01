import React, { Component } from 'react';
import Layout from '../../Components/Layout/Layout';
import Burger from '../../Components/Burger/Burger';
// import Auxiliary from '../../hoc/Auxiliary';
import classes from './BurgerBuilder.css';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';
import Modal from '../../Components/UI/Modal/Modal';
import OrderSummary from '../../Components/Burger/OrderSummary/OrderSummary';
import PropTypes from 'prop-types';

const INGREDIENTS_PRICE={
    cheese:2.2,
    meat:3.4,
    salad:1.1
}

class BurgerBuilder extends Component {

    state = {
        ingredients: {
            cheese: 0,
            meat: 0,
            salad: 0,
        },
        price:4,
        OrderButtonActiveness:false,
        orderShow:false
    }

    OrderButtonClick=(ingredients)=>{
     
             const valueOrderButtonClick= Object.keys(ingredients).map(elKey=>{
                  return ingredients[elKey];
              }).reduce((sum,el)=>{
                 return sum+el;
              },0);  
              this.setState({
                  OrderButtonActiveness:valueOrderButtonClick>0
              })
       }

    addIngredientsHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const oldPrice=this.state.price;
        const newPrice=INGREDIENTS_PRICE[type];
        const price=oldPrice+newPrice;

        this.setState({
            ingredients: updatedIngredients,
            price:price
        })
        this.OrderButtonClick(updatedIngredients);
    }

    removeIngredientshandler = (type) => {
        const updatedIngredients = { ...this.state.ingredients };
        const oldValue = updatedIngredients[type];
       let newValue;
        if(oldValue!==0){
         newValue = oldValue - 1;
        
        updatedIngredients[type] = newValue;
        
        const oldPrice=this.state.price;
        const newPrice=INGREDIENTS_PRICE[type];
        const price=oldPrice-newPrice;
        this.setState({
            ingredients: updatedIngredients,
            price:price
        })
        this.OrderButtonClick(updatedIngredients);
    }
    }

   orderShow=()=>{
       this.setState({
           orderShow:true
       });
   }

   removeOrder=()=>{
       this.setState({
           orderShow:false
       })
   }
 
   continueClicked=()=>{
       alert('ok!');
   }

    render() {
 const disabledInfo={...this.state.ingredients};
 for(let key in disabledInfo)
 {
    disabledInfo[key]=(disabledInfo[key]<=0);
    // console.log(disabledInfo[key]);
   
  
 }

        return (
           
            <div className={classes.BurgerBuilder}>
                 <Modal show={this.state.orderShow} removeOrder={this.removeOrder} 
                 cancelClicked={this.removeOrder} continueClicked={this.continueClicked}
                 currentPrice={this.state.price}
                 >
                     <OrderSummary ingredients={this.state.ingredients}/>
                 </Modal>
                <Layout>
                    <Burger ingredients={this.state.ingredients}></Burger>
                    <BuildControls currentPrice={this.state.price} 
                    addMore={this.addIngredientsHandler} 
                    doLess={this.removeIngredientshandler} 
                    disabled={disabledInfo}                 
                    disabledOrderButton={this.state.OrderButtonActiveness}
                    orderShow={this.orderShow}
                    ></BuildControls>
                </Layout>
            </div>
        );
    }
}

BurgerBuilder.propTypes={
    cheese:PropTypes.number,
    meat:PropTypes.number,
    salad:PropTypes.number,
}

export default BurgerBuilder;