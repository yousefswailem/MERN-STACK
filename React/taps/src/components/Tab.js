import React ,{useState} from "react";
import Content from '../components/Content';

const Tab = (props) => {
    const [content,setContent]=useState("");


    const handleClickedButton=(e,content)=>{
        setContent(content);
    }

    return (
        <div>
            <ul>
                {props.theTabs.map(tab=><button onClick={(e)=>handleClickedButton(e,tab.content)}>{tab.label}</button>)}
            </ul>
            <Content content={content} />
        </div>
    )
}
export default Tab;