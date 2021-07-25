import React,{ useState } from 'react'
import axios from 'axios';


const Pokis = (props) => {
    const [Poki, setPoki] = useState([]);
    

    const useeffect = () => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => { setPoki(response.data.results)})
    };
    

    return (
        <>
        <button onClick= { () => useeffect()} > Click me </button>
        <ol>
        { Poki.map((Poki, index) => {
                return (<li  key={index} > { Poki.name }</li>)
            })}
        </ol>
    </>
    )
}

export default Pokis
