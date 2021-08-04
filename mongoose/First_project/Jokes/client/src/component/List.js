import React from 'react';
import { Link } from '@reach/router';



function List(props) {
    return (
        <>
        <div>
        <h1>All Products:</h1>
            {props.products.map((product, idx)=>{
                return <Link to={`/api/products/${product._id}`}><p key={idx}>{product.title}</p></Link>
                
            })}

        </div>
        </>
    )
}

export default List
