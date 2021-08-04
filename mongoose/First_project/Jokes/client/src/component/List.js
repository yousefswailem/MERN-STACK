import React from 'react';
import { Link } from '@reach/router';
import axios from 'axios';


function List(props) {
    const { removeFromDom } = props;
    const deleteProduct = (productId) => {
        axios.delete('http://localhost:8000/api/products/' + productId)
            .then(res => {
                removeFromDom(productId)
            })
    }
    return (
        <div>
            <h1>All Products:</h1>
            {props.products.map((product, idx)=>{
                return <>
                <Link to={`/api/products/${product._id}`}><p key={idx}>{product.title}</p></Link>
                <button onClick={(e)=>{deleteProduct(product._id)}}>Delete</button>
                </>
            })}
        </div>
    )
}
export default List
