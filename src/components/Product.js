import React from 'react';

//display some products
//use map or for loop
//display categories as a menu option, side bar on burger menu
const Product = ({product}) => {

    return(
        <div>
            <p>{product.title}</p>
        </div>
    )
}

export default Product