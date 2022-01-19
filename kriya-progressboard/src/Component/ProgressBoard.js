import React, { useEffect, useState, Component } from 'react'
import ProgressInput from './ProgressInput';
import IsDrag from './IsDrag';
import { useDrop } from 'react-dnd'
import IsDrop from './IsDrop';





function ProgressBoard() {

    const [addId, setId] = useState()
    const [dataTodo, setDataTodo] = useState([])
    const [dataOnprog, setDataOnprog] = useState([])
    const [dataDone, setDataDone] = useState([])

    const [trigger, setTrigger] = useState()

    const todoData = localStorage.getItem('Todo')
    const onprogData = localStorage.getItem('Onprog')
    const doneData = localStorage.getItem('Done')

    useEffect(() => {
        setDataTodo(JSON.parse(todoData))
        setDataOnprog(JSON.parse(onprogData))
        setDataDone(JSON.parse(doneData))

    }, [todoData, onprogData, doneData]);


    function task1() {
        return {
            test: "success"
        }
    }
    function task2() {
        return {
            test: "success"
        }
    }

    console.log(task1())
    console.log(task2())
    return (
        <div className="pb-container">
            <div className='pb-board' >
                <div className='pb-title'>
                    <p>Todo</p>
                    <input type="submit" value="+" id="1" onClick={() => setId("1")} />
                </div>

                <IsDrop dataTask={dataTodo} dropArea={"1"} trig={setTrigger} />



                {addId === "1" && <ProgressInput taskId={addId} inputDoneTrigger={setId} />}
            </div>
            <div className='pb-board'>
                <div className='pb-title'>
                    <p>On Progress</p>
                    <input type="submit" value="+" id="2" onClick={() => setId("2")} />
                </div>

                <IsDrop dataTask={dataOnprog} dropArea={"2"} />

                {addId === "2" && <ProgressInput taskId={addId} inputDoneTrigger={setId} />}
            </div>

            <div className='pb-board'>
                <div className='pb-title'>
                    <p>Done</p>
                    <input type="submit" value="+" id="3" onClick={() => setId("3")} />
                </div>

                <IsDrop dataTask={dataDone} dropArea={"3"} />

                {addId === "3" && <ProgressInput taskId={addId} inputDoneTrigger={setId} />}
            </div>
        </div>
    )
}

export default ProgressBoard
