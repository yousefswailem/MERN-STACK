import React from 'react'


const Display = (props) => {
  
    const handleChecking=(e,myIndex)=>{
        const newTasksArray=props.tasks.map((task,i)=>{
            if(i===myIndex){
                const updatedTask={...task, isChecked:!task.isChecked};
                if(task.isSlashed==="line-through"){
                    return {...updatedTask, isSlashed:"none"}
                }else{
                    return {...updatedTask, isSlashed:"line-through"}
                }
            }else{
                return task;
            }
        })
        props.setTasks(newTasksArray);
    }

   const handleDelete=(e,myIndex)=>{
       const newArray=props.tasks.filter((task,index)=>index!==myIndex);
       props.setTasks(newArray);
   }

    return (
        <>
            {props.tasks.map((task,index)=>
            <div key={index} >
                <input type="checkbox" onChange={(e)=>handleChecking(e,index)} checked={task.isChecked}  />
                <p style={{textDecoration:task.isSlashed}}>{task.taskDesc}</p>  
                <input type="submit" value="Delete"  onClick={(e)=>handleDelete(e,index)}/>
            </div>
            )}
        </>
    )
}

export default Display