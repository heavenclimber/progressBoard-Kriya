import React, { useEffect, useState, Component } from 'react'
import ProgressInput from './ProgressInput';
import IsDrag from './IsDrag';
import {useDrop} from 'react-dnd'

function IsDrop({dataTask, dropArea, trig}) {

    const todoData = localStorage.getItem('Todo')
    const onprogData = localStorage.getItem('Onprog')
    const doneData = localStorage.getItem('Done')

    
    
    const [dropstart, setDropstart] = useState()

    const [childData, setChildData] = useState("");


    const [{isOver}, drop] = useDrop(()=>({
        accept: "tasks",
        drop:(item)=>addTaskToBoard(item.id),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }))

    // const functionHandler = (data) => {

    //     props.passChildData(data);
        

    // }
    

    const addTaskToBoard = (id)=>{
        if(dropArea==="1"){
            setDropstart(dropArea)
            trig(true)
            
            // console.log("darisini "+childData)
            // console.log("pindahsini "+dropArea)
        }
        else if(dropArea==="2"){
            setDropstart(dropArea)
            // console.log("pindahsini "+dropArea)
        }
        else if(dropArea==="3"){
            setDropstart(dropArea)
            // console.log("pindahsini "+dropArea)
        }
       
    }


    
    return (
            <div className='pb-task-container' ref={drop}>
                {dataTask ? <div>

                    {dataTask.map((val, i) => {
                        return (
                            <IsDrag content={val} index={i} startArea={dropArea} passChildData={setChildData}  />
                        )
                    })}

                </div> : <div></div>}
            </div>
    );
}


export default IsDrop;
