import React from 'react';


const Content = (props) => {   
    return <div style={{border:"5px solid black"}}>
        {props.content}
    </div>;
}

export default Content;