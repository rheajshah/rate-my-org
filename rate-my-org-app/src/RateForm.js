import React from 'react'
import { useNavigate } from 'react-router-dom'
import './rateform.css'
import Button from 'react-bootstrap/Button';
function RateForm() {
    const nav = useNavigate();
    const handleClick = () => {
        nav("/")
    }

    return (
        <div>
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

export default RateForm