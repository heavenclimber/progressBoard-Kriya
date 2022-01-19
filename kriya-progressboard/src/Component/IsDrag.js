import React, { useEffect, useState, useCallback } from 'react'
import { useDrag, useS } from 'react-dnd'

function IsDrag({ content, index, startArea, passChildData }) {


    const todoData = localStorage.getItem('Todo')
    const onprogData = localStorage.getItem('Onprog')
    const doneData = localStorage.getItem('Done')

    const [temp, setNewTemp] = useState()

    const [newTask, setNewTask] = useState([])

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "tasks",
        item: { id: index },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    if(isDragging){
        
        if(startArea==="1"){
            let data=JSON.parse(todoData)
            console.log("data" + index)
            console.log(data)
            const datanew=data.splice(index, 1);
            console.log("setelahdelet"+index)
            console.log("setelahdelet"+datanew)
            localStorage.setItem('Todo', JSON.stringify(datanew))
        }
        
    }

    const DeleteFinal = () => {
        if(startArea==="1"){
            let data=JSON.parse(todoData)
            const datanew=data.splice(index, 1);
            
            localStorage.setItem('Todo', JSON.stringify(datanew))
            setNewTemp(true)
        }
    }


    return (
        <div className='pb-task' ref={drag} style={{ border: isDragging ? "5px solid pink" : "0px" }}>
            {content}
            <div onClick={()=>{DeleteFinal()}}>Delete</div>
        </div>
    );
}

export default IsDrag;
