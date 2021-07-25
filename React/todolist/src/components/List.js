import React,{useState} from 'react'
import Display from '../components/Display';


function List() {
    const [newTask,setNewTask]=useState("");
    const [tasks,setTasks]=useState([]);
    const myTask={"taskDesc":newTask,"isChecked":false,"isSlashed":"none"};

    const onChanging=(e)=>{
        setNewTask(e.target.value);
    }

    const onAdding=(e)=>{
        e.preventDefault();
        if(newTask.length!==0){
            setTasks(tasks.concat([myTask]));
        }
        setNewTask("");
    }

    return (
        <>
        <form onSubmit={(e)=>onAdding(e)}>
            <input type="text" onChange={(e)=>onChanging(e)} value={newTask}/>
            <input type="submit" value="Add" />
        </form>
        
        <Display tasks={tasks} setTasks={setTasks}/>
        </>
    )
}

export default List

