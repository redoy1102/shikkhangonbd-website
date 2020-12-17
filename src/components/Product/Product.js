import React from 'react';
import './Product.css'


const Product = (props) => {
    
    return(
        <div className="productStyle">
            <div>
                <img src={props.product.img} alt=""/>
            </div>
            <div>
                <h3>{props.product.name}</h3>
                <p>{props.product.price}</p>
                <p>{props.product.description}</p>
                <button>Add to cart</button>
            </div>
        </div>
    );
};

export default Product;