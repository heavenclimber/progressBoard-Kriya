import React, { useEffect, useState, useCallback } from 'react'



export default function ProgressInput({ taskId, inputDoneTrigger }) {

    const todoData = localStorage.getItem('Todo')
    const onprogData = localStorage.getItem('Onprog')
    const doneData = localStorage.getItem('Done')

    const [newTask, setNewTask] = useState()


    function submitNewProgress() {

        console.log(newTask)

        if (newTask === null || newTask===undefined) {
            alert("Must be Filled")
            inputDoneTrigger(null)
        }

        else {
            inputDoneTrigger(null)


            if (taskId === "1") {
                let tempTodo = JSON.parse(todoData)
                console.log(tempTodo)
                if (tempTodo === null) {
                    localStorage.setItem('Todo', JSON.stringify([newTask]))
                }
                else {
                    let newData = [...tempTodo, newTask]
                    localStorage.setItem('Todo', JSON.stringify(newData))
                }
            }

            else if (taskId === "2") {
                let tempOnprog = JSON.parse(onprogData)
                if (tempOnprog === null) {
                    localStorage.setItem('Onprog', JSON.stringify([newTask]))
                }
                else {
                    let newData = [...tempOnprog, newTask]
                    localStorage.setItem('Onprog', JSON.stringify(newData))
                }
            }


            else if (taskId === "3") {
                let tempDone = JSON.parse(doneData)
                if (tempDone === null) {
                    localStorage.setItem('Done', JSON.stringify([newTask]))
                }
                else {
                    let newData = [...tempDone, newTask]
                    localStorage.setItem('Done', JSON.stringify(newData))
                }
            }
        }


    }


    return (
        <div className='newInput'>
            <form>
                <label>
                    <input type="text" name="name" onInput={e => setNewTask(e.target.value)} />
                </label>
                <input type="button" value="✔" onClick={submitNewProgress} />
                <input type="button" value="✖" onClick={() => { inputDoneTrigger(null) }} />
            </form>
        </div>
    )
}

