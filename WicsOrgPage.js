import React from 'react'
import { useNavigate } from 'react-router-dom'
import './wicsorgpage.css'
import Button from 'react-bootstrap/Button';
function WicsOrgPage() {
    const nav = useNavigate();
    const handleClick = () => {
        nav("/rateform")
    }

    return (
        <div>
            <div class = "info">
                <h2>Women in Computer Science (WiCS)</h2>
                <div class="details">
                    <h3>Our mission is to encourage and support women in computing through: outreach, professional development, academic initiatives, and social events.</h3>
                </div>
            </div>
            

            <div class="ratings-chart">
                {/* You can use a chart library like Chart.js for the ratings chart */}
                {/* Example: <canvas id="ratingsChart"></canvas> */}
            </div>

            <div class = "row">
                <div class="ratings col-5">
                <div class="row d-flex justify-content-center align-items-center organization-card">
                    <h1>Ratings</h1>
                    <p> <b>Overall Rating:</b> 4.5</p>
                    <p> <b>Dues:</b> $$$ </p>
                    <p> <b>time commitment: </b> %%% </p>
                    <p> <b>DEI :</b> ***** </p>
                    </div>
                </div>

                <div class = "col-10">
                    
                <div class="row d-flex justify-content-center align-items-center organization-card">
                    <button onClick={handleClick}>
                        Leave a Rating
                    </button>
                </div>

                    <div class="row d-flex justify-content-center align-items-center organization-card">
                            
                            <div class="col-3">
                                <h1 class = "rating-box"><b>5.0</b></h1>
                            </div>
                            <div class="col-9">
                                <h4>02/03/2024</h4>
                                <p>WiCS is an amazing club for professional development. I loved the Hackathons and won some really cool prizes. They have a lot of events and you can pick and choose what you wanna go to. Free events!</p>
                            </div>
                    </div>
                    <div class="row d-flex justify-content-center align-items-center organization-card">
                        <div class="col-3">
                            <h1 class = "rating-box"><b>4.0</b></h1>
                        </div>
                        <div class="col-9">
                            <h4>01/28/2024</h4>
                            <p>WiCS officers are super approachable. Points systems for attending meetings with cool swag. Always have great food at socials! Their feb hackathon was my favorite last year.</p>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center align-items-center organization-card">
                        <div class="col-3">
                            <h1 class = "rating-box"><b>5.0</b></h1>
                        </div>
                        <div class="col-9">
                            <h4>12/25/2023</h4>
                            <p>I love WiCS so much, I'm writing a review on Christmas. Their technical workshops are really good especially for meeting companies.</p>
                        </div>
                    </div>
                </div>
            </div>


            <canvas id="chart" width="400" height="400"></canvas>

            <script src="chart.js"></script>
        </div>
    )
}

export default WicsOrgPage