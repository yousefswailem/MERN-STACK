import React, { useEffect, useState } from 'react';
import Products from '../component/Products';
import List from '../component/List';
import axios from 'axios';

const Main = () => {
    const [products, setProducts] = useState([]);
    const [loaded, setLoaded] = useState(false);
    
    useEffect(()=>{
        axios.get('http://localhost:8000/api/products')
            .then(res=>{
               // console.log(res.data.Products)
                setProducts(res.data.Products);
                setLoaded(true);
            });
    },[])

    return (
        <div>
           <Products />
           <hr/>
           {loaded && <List products={products}/>}
        </div>
    )
}
export default Main;