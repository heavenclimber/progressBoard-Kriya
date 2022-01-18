import React, { useEffect, useState } from 'react'
import ProgressInput from './ProgressInput';



function ProgressBoard() {

    const [addId, setId] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {

        
    }, [data]);

    return (
        <div class="pb-container">
            <div className='pb-board'>
                <div className='pb-title'>
                    <p>Todo</p>
                    <input type="submit" value="+" id="1" />
                </div>
                <ProgressInput />

            </div>
            <div className='pb-board'>
                <div className='pb-title'>
                    <p>On Progress</p>
                    <input type="submit" value="+" id="2" />
                </div>
            </div>
            <div className='pb-board'>
                <div className='pb-title'>
                    <p>Done</p>
                    <input type="submit" value="+" id="3" />
                </div>
            </div>
        </div>
    )
}

export default ProgressBoard
