import React from 'react'
import { useNavigate } from 'react-router-dom'
import './rateform.css'
import Button from 'react-bootstrap/Button';
  
function RateForm() {
    
        const goBack = () => {
          window.history.back(); // This function navigates back in the history stack
        };

    const nav = useNavigate();
    const handleClick = () => {
        nav("/")
    }

    

    return (
        <div>
            <button onClick={goBack}>
                <b>← back</b>
            </button>
            <div class="review-form" >
                <h2>Write a Review</h2>
                <form>

                <label for="rating">Overall Rating:</label>
                <input type="number" id="rating" name="rating" min="1" max="5" /><br />

                <label for="rating">On a scale of 1 to 5, how heavy are the dues?  </label>
                <input type="number" id="rating" name="rating" min="1" max="5" /><br />

                <label for="rating">On a scale of 1 to 5, how much time committment is required?  </label>
                <input type="number" id="rating" name="rating" min="1" max="5" /><br />

                <label for="rating">On a scale of one to 5, how diverse, equal and/or inclusive (DEI) are this group?  </label>
                <input type="number" id="rating" name="rating" min="1" max="5" /><br />


                    <label for="review">Your Review:</label>
                    <textarea id="review" name="review" rows="4" cols="50"></textarea><br />

                    
                    <input type="submit" value="Submit Review" />
                </form >
            </div>
        </div>
    )
}

export default RateForm