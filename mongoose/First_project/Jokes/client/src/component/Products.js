import React,{useState } from 'react';
import axios from 'axios';



const Products=()=> {   

    
    const [title, setTitle] = useState(""); 
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    
    
    const handelonSubmit = (e) => {
        
        e.preventDefult();                             
                axios.post("http://localhost:8000/api/products/new",{
                    title,
                    price,
                    description
                })
                .then(res =>console.log(res))
                .catch(err=>console.log(err))
                setTitle("");
                setPrice();
                setDescription("");
    }
                          
    



    return (
        <>
        <div>
            
            <form onSubmit={handelonSubmit}>
            <h1>Product Manager</h1>
           <input type="text" placeholder="Title" onChange={(e) => setTitle(e.target.value)}  value={title}/>      
           <br />
           <input type="Number" placeholder="Price" onChange={(e) => setPrice(e.target.value)}  value={price}/>      
           <br />
           <input type="text" placeholder="Description" onChange={(e) => setDescription(e.target.value)}  value={description}/> 
           <br />
           <button>Create</button>     
           </form>  
           
        </div>
        </>
    )
}

export default Products;
