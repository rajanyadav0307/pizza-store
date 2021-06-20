import React from 'react';
import './PopUp.css';
import { Button } from 'react-bootstrap';
import ProductDetails from './ProductDetails';
import Home from '../Home';

function PopUp(props) {
    return ( props.trigger) ? (
        <div className="popup">
            <div className="popup-inner">
               
                <Button variant="warning" className="close" onclick={()=> props.trigger(false)} >Pay
                </Button>
                
            </div>
        </div>
    ) :"";
}

export default PopUp
