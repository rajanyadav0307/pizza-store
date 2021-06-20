import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';

function Navbar() {
    const [show,handleShow] = useState(false);

    const transitionNavBar = () => 
    {
        if(window.scrollY > 100)
        {
            handleShow(true);
        }
        else
        {
            handleShow(false);
        }
    }
    useEffect(()=> {
        window.addEventListener("scroll",transitionNavBar);
        return () => window.removeEventListener("scroll", transitionNavBar);
    },[])

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <div className="nav__contents">
                <Link to="/">
                    <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/2/20/Pizza-Pizza-Logo-1.png"/>
                </Link>
            </div>
            <div className="cart__feature">
                <Link to="/cart" className="link__cart">
                    <AddShoppingCartIcon/>
                    <span>0</span>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
