import React from 'react'
import { useNavigate } from 'react-router-dom'
import './mojodojoorgpage.css'
import Button from 'react-bootstrap/Button';
function WicsOrgPage() {
    const nav = useNavigate();
    const handleClick = () => {
        nav("/rateform")
    }

    return (
        <div>
            <div class = "info">
                <h2>Mojo Dojo Casa House)</h2>
                <div class="details">
                    <h3>I am Kenough.</h3>
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
                    <p> <b>Overall Rating:</b> 1.3</p>
                    <p> <b>Dues:</b> $$$$$ </p>
                    <p> <b>time commitment: </b> % </p>
                    <p> <b>DEI :</b> * </p>
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
                                <h1 class = "rating-box"><b>1.0</b></h1>
                            </div>
                            <div class="col-9">
                                <h4>02/04/2024</h4>
                                <p>Pathetic.</p>
                            </div>
                    </div>
                    <div class="row d-flex justify-content-center align-items-center organization-card">
                        <div class="col-3">
                            <h1 class = "rating-box"><b>3.0</b></h1>
                        </div>
                        <div class="col-9">
                            <h4>01/27/2024</h4>
                            <p> A cool place to hang with my bros.</p>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center align-items-center organization-card">
                        <div class="col-3">
                            <h1 class = "rating-box"><b>0.5</b></h1>
                        </div>
                        <div class="col-9">
                            <h4>12/25/2022</h4>
                            <p>toxic. stay away! </p>
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