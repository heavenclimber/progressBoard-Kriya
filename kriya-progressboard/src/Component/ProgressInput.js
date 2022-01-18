import React from 'react'

function ProgressInput() {
    return (
        <div>
            <form>
                <label>
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="✔" />
                <input type="submit" value="✖" />
            </form>
        </div>
    )
}

export default ProgressInput
