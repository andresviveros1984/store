import React from 'react';
import styled from 'styled-components';



const Category = ({category}) => {
    return(
        <div>
            <p>{category.products}</p>
        </div>
    )
}




export default Category;