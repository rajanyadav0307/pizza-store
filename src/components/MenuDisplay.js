import React, {useEffect} from 'react'
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import ProductComponent from './ProductComponent';
import {setProducts} from '../redux/actions/productsActions';
function MenuDisplay() {
    
    const products = useSelector((state) => state);
    const dispatch = useDispatch();
    const fetchProducts = async() =>
    {
        const response = await axios.get("https://run.mocky.io/v3/ec196a02-aaf4-4c91-8f54-21e72f241b68").catch((err)=>{
            console.log("Err",err);
            
        });
        dispatch(setProducts(response.data));
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    console.log("Products:",products);
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    );
};

export default MenuDisplay;
