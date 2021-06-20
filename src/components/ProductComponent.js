import React from 'react';
import { useSelector } from 'react-redux';
import { setProducts } from '../redux/actions/productsActions';

import { Link } from 'react-router-dom';
import ProductDetails from './ProductDetails';
import {Container,Row,Col} from 'react-bootstrap';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Button } from 'reactstrap';
import PopUp from './PopUp';
import { useState } from 'react';




const ProductComponent = () => {
  

  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
  
    const { id, name, description, price, rating,img_url } = product;
    return (
      <div className="four wide column" key={id}>
        <Link to={`/product/${id}`} className="link">
          <div className="ui link cards">
            <div className="card">
              <div className="image">
                <div className="row1"> 
                   <div className="meta price">{name}{product.isVeg ? <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Indian-vegetarian-mark.svg/768px-Indian-vegetarian-mark.svg.png" className="veg"/> : <img src="https://tpng.net/download/600x600_245-2459071_veg-biryani-png.png"className="veg"/>}</div>
                </div>
            
                <img src={img_url} alt={name} />
              </div>
              <div className="content">
                <div className="header">{description}</div>
                <div className="meta price">Rs.{price}<Button variant="warning" className="cart_button">Add+</Button></div>
                <div className="meta">⭐{rating}</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    );
    
  });
  return <>{renderList}</>;
};

export default ProductComponent;