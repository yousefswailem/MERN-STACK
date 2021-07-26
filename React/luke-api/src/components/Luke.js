import React,{useState,useEffect } from 'react'
import axios from 'axios';
import {navigate} from '@reach/router';



function Luke(props) {
    
    
    const [selectedBy,setSelectedBy]=useState("people");
    const [selectedId,setSelectedId]=useState(1);
    const [arr ,setArr] = useState([]);
    const [customizedError,setCustomizedError]=useState("");
    const [customizedErrorPicture,setCustomizedErrorPicture]=useState("");


    const search=(e)=>{
        e.preventDefault();
        navigate(`http://localhost:3000/${selectedBy}/${selectedId}`);
    }

    useEffect((props)=>{
        axios.get("https://swapi.dev/api/"+ selectedBy +"/"+ selectedId )
        .then((response)=>{
            setArr(response.data);
            setCustomizedError("");
            setCustomizedErrorPicture("");
        })
        .catch(()=>{
            setCustomizedError("These aren't the droids you're looking for");
            setCustomizedErrorPicture("https://api.time.com/wp-content/uploads/2015/12/star-wars-episode-iii-revenge-of-the-sith-obi-wan.jpg");
    })
        
    },[selectedId,selectedBy]);
    

    return (
        <>
        <form onSubmit={(e)=>search(e)}>
        <div>
            <p>Search for :</p>
            <select onChange={(e)=>setSelectedBy(e.target.value)} value={selectedBy}>
                <option value="people"> people</option>
                <option value="planets"> planets</option>
                <option value="starships"> starships</option>
            </select>
            <p>ID: </p>
            
            <input type="text" onChange={(e)=>setSelectedId(e.target.value)} value={selectedId}/>
            
          
          
        <button > Click me </button>
        </div>
        </form>
        {customizedError.length>0 &&
                <div>
                    <p style={{color:"red"}}>error: {customizedError}</p>
                    <img src={customizedErrorPicture} alt="Obi-Wan Kenobi" style={{width:"165px",height:"165px"}}/>
                </div>
            }
        
        {selectedBy ==="people" &&
            <>
                <h1>{arr.name}</h1>
                <p><b>Height:</b> {arr.height}</p>
                <p><b>Mass:</b> {arr.mass}</p>
                <p><b>Hair Color:</b> {arr.hair_color}</p>
                <p><b>Skin Color:</b> {arr.skin_color}</p>
            </>
        }
        
        {selectedBy==="planets" &&
            <>
                <h1>{arr.name}</h1>
                <p><b>Climate:</b> {arr.climate}</p>
                <p><b>Terrain:</b> {arr.terrain}</p>
                <p><b>Surface Water:</b> {arr.surface_water}</p>
                <p><b>Population:</b> {arr.population}</p>
            </>
        }
        </>
    )
    
}

export default Luke
