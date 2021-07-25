import React from 'react'

function color(props) {
   
    return (
        <div>
            <p style={{color:props.color,backgroundColor:props.back,height:"30px",}}> Hello </p>
        </div>
    )
}

export default color
