import React , {useState} from 'react';
import '../App.css';
import CreateBox from './CreateBox';
const Box = () => {

    const [Color, setcolor] = useState("");
    const [box, setbox] = useState([]);
     const handleChange=(e)=>{
        setcolor(e.target.value);
    }

    const createbox =(e) =>{
        e.preventDefault();
        setbox(box.concat([<CreateBox myColor={Color}/>]));
    
}

    return(
    <div>
        <form onSubmit={createbox}>
        <div>
        <label>Color: </label>
        <input type="text" onChange={handleChange} name="Color"/>
        </div>
        <div>
            <button >make a colored box</button>
        </div>
        <p >{box}</p>
        </form>
    </div>

    )
}

export default Box;