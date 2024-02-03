import React from 'react'
import { useNavigate } from 'react-router-dom'
import './orgslist.css'

function Orgslist() {
    const nav = useNavigate();
    const handleClick = () => {
        nav("/")
    }

    return (
        <div>
            <div class="organization-card">
                <div class="rating">4.5</div>
                <div class="organization-info">
                    <h2>(un)Jaden</h2>
                    <p>$ | Mental Health</p>
                    <p>- Mental Health Organization</p>
                    <p>Reviews: 120</p>
                </div>
            </div>


            <div class="organization-card">
                <div class="rating">3.8</div>
                <div class="organization-info">
                    <h2>Org 2</h2>
                    <p>$ | </p>
                    <p>Reviews: 85</p>
                </div>
            </div>

            <div class="review-form">
                <h2>Write a Review</h2>
                <form>
                    <label for="review">Your Review:</label>
                    <textarea id="review" name="review" rows="4" cols="50"></textarea><br />

                    <label for="rating">Rating:</label>
                    <input type="number" id="rating" name="rating" min="1" max="5" /><br />

                    <input type="submit" value="Submit Review" />
                </form>
            </div>
        </div>
    )
}

export default Orgslist