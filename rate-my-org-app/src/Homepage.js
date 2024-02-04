import React from 'react';
import './homepage.css';
import {useState} from 'react';
import { useNavigate } from 'react-router-dom';

function Homepage() {

    const nav = useNavigate();
    const handleClick = () => {
        nav("/orgs")
    }
    const [open, setOpen] = useState(false);

    return (
            <div>
                <header> 
                <h2>Hi Barbie!</h2>
                <h3> All Barbies deserve to find a safe space on campus, so let us help. </h3>
                </header>
            <div class= "centered-container">
                
                <h1>Choose your university to begin</h1>
                    <div className="btn-group">
                        <button class="btn btn-secondary dropdown-toggle" 
                                type="button"  
                                data-toggle="dropdown" 
                                aria-haspopup="true" 
                                aria-expanded={open} 
                                onClick={()=>{setOpen(!open)}} > Options </button>

                        <div class={`dropdown-menu ${open ? 'show' : ''} `} onClick={()=>{setOpen(!open)}}>
                            <a class="dropdown-item" href="#" onClick={handleClick}>University of Texas at Austin</a>
                            <a class="dropdown-item" href="#">University of Texas San Antonio</a>
                            <a class="dropdown-item" href="#">Texas Tech University</a>
                            <a class="dropdown-item" href="#">Stanford University</a>
                        </div>
                    </div>
            </div>
            </div>
    );
};

export default Homepage;