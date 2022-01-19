import React, { useEffect, useState } from 'react'
import ProgressInput from './ProgressInput';



function ProgressBoard() {

    const [addId, setId] = useState()
    const [data, setData] = useState([])
    const [dataTodo, setDataTodo] = useState([])
    const [dataOnprog, setDataOnprog] = useState([])
    const [dataDone, setDataDone] = useState([])

    const todoData = localStorage.getItem('Todo')
    const onprogData = localStorage.getItem('Onprog')
    const doneData = localStorage.getItem('Done')

    useEffect(() => {
        setDataTodo(JSON.parse(todoData))
        setDataOnprog(JSON.parse(onprogData))
        setDataDone(JSON.parse(doneData))

    }, [todoData, onprogData, doneData]);


    return (
        <div className="pb-container">
            <div className='pb-board'>
                <div className='pb-title'>
                    <p>Todo</p>
                    <input type="submit" value="+" id="1" onClick={() => setId("1")} />
                </div>

                <div className='pb-task-container'>
                    {dataTodo ? <div>

                        {dataTodo.map((val, i) => {
                            return (
                                <div className='pb-task' draggable>
                                    {val}
                                </div>
                            )
                        })}

                    </div> : <div></div>}
                </div>


                {addId === "1" && <ProgressInput taskId={addId} inputDoneTrigger={setId} />}
            </div>
            <div className='pb-board'>
                <div className='pb-title'>
                    <p>On Progress</p>
                    <input type="submit" value="+" id="2" onClick={() => setId("2")} />
                </div>

                <div className='pb-task-container'>
                    {dataOnprog ? <div>

                        {dataOnprog.map((val, i) => {
                            return (
                                <div className='pb-task'>
                                    {val}
                                </div>
                            )
                        })}

                    </div> : <div></div>}
                </div>

                {addId === "2" && <ProgressInput taskId={addId} inputDoneTrigger={setId} />}
            </div>
            <div className='pb-board'>
                <div className='pb-title'>
                    <p>Done</p>
                    <input type="submit" value="+" id="3" onClick={() => setId("3")} />
                </div>

                <div className='pb-task-container'>
                    {dataDone ? <div>

                        {dataDone.map((val, i) => {
                            return (
                                <div className='pb-task'>
                                    {val}
                                </div>
                            )
                        })}

                    </div> : <div></div>}
                </div>

                {addId === "3" && <ProgressInput taskId={addId} inputDoneTrigger={setId} />}
            </div>
        </div>
    )
}

export default ProgressBoard
