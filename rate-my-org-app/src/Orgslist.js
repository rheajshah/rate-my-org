import React from 'react'
import { useNavigate } from 'react-router-dom'
import './orgslist.css'
import Button from 'react-bootstrap/Button';
function Orgslist() {
    const nav = useNavigate();
    const handleClick = () => {
        nav("/")
    }

    return (
        <div class = "row">
            <nav class="navbar nav-style">
                <a class="navbar-brand" href="#">
                    <p>RMO</p>
                </a>
            </nav>

            <div class = "col-3 filters">
                <h1>Filter</h1>
                <div className="btn-group">
                    <button class="btn btn-secondary dropdown-toggle" 
                        type="button"  
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false" > Category 
                        </button>
                    <button class="btn btn-secondary dropdown-toggle" 
                        type="button"  
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false" > Recruitment 
                        </button>
                    <button class="btn btn-secondary dropdown-toggle" 
                        type="button"  
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false" > Major 
                        </button>
                    <button class="btn btn-secondary dropdown-toggle" 
                        type="button"  
                        data-toggle="dropdown" 
                        aria-haspopup="true" 
                        aria-expanded="false" > Dues 
                        </button>
                        </div>
            </div>
            <div class = "col-9">
                <div class="row d-flex justify-content-center align-items-center organization-card">
                        <div class="col-3">
                            <h1 class = "rating-box"><b>4.5</b></h1>
                            <p class = "text-center">45 Ratings</p>
                        </div>
                        <div class="col-9">
                            <h1><b><a href = "/wics-org" class = "remove-link">Women in Computer Science (WiCS)</a></b></h1>
                            <h4>Computer Science | $ | 2 hr/week</h4>
                            <p>Our mission is to encourage and support women in computing through: outreach, professional development, academic initiatives, and social events.</p>
                        </div>
                </div>

                <div class="row d-flex justify-content-center align-items-center organization-card">
                        <div class="col-3">
                            <h1 class = "rating-box"><b>1.3</b></h1>
                            <p class = "text-center">76 Ratings</p>
                        </div>
                        <div class="col-9">
                            <h1><b><a href = "/mojo-dojo-org" class = "remove-link">Mojo Dojo Casa House</a></b></h1>
                            <h4>Social | $$$$$ | 1 hr/week</h4>
                            <p>MEN RAHHHH</p>
                            <p>Motto: I am Kenough.</p>
                        </div>
                </div>

                <div class="row d-flex justify-content-center align-items-center organization-card">
                        <div class="col-3">
                            <h1 class = "rating-box"><b>4.1</b></h1>
                            <p class = "text-center">28 Ratings</p>
                        </div>
                        <div class="col-9">
                            <h1><b>Texas Mohini</b></h1>
                            <h4>Dance | $$$ | 16 hr/week</h4>
                            <p>Texas Mohini is UT's premier all-female Bollywood Fusion dance team. They perform multiple dance styles including Bollywood, Classical, Hip-hop, Contemporary, and Bhangra. Mohini competes within the Desi Dance Network (DDN), a Bollywood Dance Championship Circuit that allows collegiate dance teams to spread South Asian Culture through competitions and showcases. </p>
                        </div>
                </div>
            </div>
            
        </div>
    )
}

export default Orgslist