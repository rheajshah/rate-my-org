import React from 'react';
import './Homepage.css';
import './index.css';
import {useState, useEffect, useRef} from 'react';

function Homepage() {

    const [open, setOpen] = useState(false);

    return (
            <div class= "centered-container">
                <h1>Enter your university to begin</h1>
                <input type="text" class="form-control" id="search-input" placeholder="Search..." />
                <div class="input-group-append">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdown-menu" data-toggle="dropdown" 
                    aria-haspopup="true" aria-expanded="false" onClick={()=>{setOpen(!open)}} >Filter</button>
                    <div class={`dropdown-menu ${open? 'active' : 'inactive'}`}>
                        <a class="dropdown-item" href="#">Option 1</a>
                        <a class="dropdown-item" href="#">Option 2</a>
                        <a class="dropdown-item" href="#">Option 3</a>
                    </div>
                    <button class="btn btn-primary" type="button">Search</button>
                </div>
            </div>
    );
};

export default Homepage;