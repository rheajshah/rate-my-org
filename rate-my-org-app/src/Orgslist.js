import React from 'react'
import { useNavigate } from 'react-router-dom'

function Orgslist() {
    const nav = useNavigate();
    const handleClick = () => {
        nav("/")
    }
    return (
        <div>
            <div>Orgslist</div>
            <button onClick={handleClick}>
                Click me
            </button>
        </div>
    )
}

export default Orgslist