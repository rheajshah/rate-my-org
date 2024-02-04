import React from 'react'
import { useNavigate } from 'react-router-dom'
import './mojodojoorgpage.css'
import Button from 'react-bootstrap/Button';
function MojoDojoOrgPage() {
    const nav = useNavigate();
    const handleClick = () => {
        nav("/")
    }

    return (
        <div>
            <button onClick={handleClick}>
                Click me
            </button>
            
        </div>
    )
}

export default MojoDojoOrgPage