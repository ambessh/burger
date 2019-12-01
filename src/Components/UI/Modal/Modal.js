import React from 'react';
import classes from './Modal.css';
import BackDrop from '../Backdrop/Backdrop';
import Auxiliary from '../../../hoc/Auxiliary';
import Button from '../Button/Button';

const modal = (props) => {
    return (
        <Auxiliary>
            <BackDrop showBackdrop={props.show} removeOrder={props.removeOrder}></BackDrop>
            <div className={classes.Modal}
                style={{
                    transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                    opacity: props.show ? '1' : '0'
                }}  >
                <h2><em>Your Order,Price:${props.currentPrice.toFixed(2)}</em></h2>
                <p>A delicious burger with following ingredients:</p>
                {props.children}
                <p>Continue to checkout?</p>
                <Button clicked={props.cancelClicked} buttonType="Danger">Cancel</Button>
                <Button clicked={props.continueClicked} buttonType="Success">Continue</Button>
            </div>
        </Auxiliary>
    );
}

export default modal;