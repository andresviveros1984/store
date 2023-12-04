import React from 'react';
import styled from 'styled-components';
import Product from './Product';



const Home = ({results}) => {
    return (
        <div>
            <p>Products</p>
            {results.products.map(result =>{
                return(
                    <Product product={result}/>
                )
            })}
            
        </div>
    )

    
}



export default Home;