import React,{useState} from 'react'


const Pokis = (props) => {
    const [Poki, setPoki] = useState([]);
    
    const name = () => {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=807')
        .then(response => response.json() )
        .then(response => setPoki(response.results))
    }
    
    return (
        <>
        <button onClick = { () => name() }> Click me </button>
        <ol>
        { Poki.map((Poki, index) => {
                return (<li key={index}>{Poki.name}</li>)
            })}
        </ol>
    </>
    )
}

export default Pokis
