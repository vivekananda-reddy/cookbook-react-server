import React, { useEffect, useState } from "react";
import {useSelector} from "react-redux";
import * as reviewService from "../../services/reviews-service";
import ReviewCard from "./review-card";

const Reviews = ({mealDetails}) => {
    const {currentUser} = useSelector(state => state.user)
    const [review, setReview] = useState([])
    const [reviews, setReviews] = useState([])

    const postReview = async () => {
        const reviewToBePosted = {reviewText: review, idMeal: mealDetails.idMeal, strMeal: mealDetails.strMeal, strMealThumb: mealDetails.strMealThumb}
        const createdReview = await reviewService.createReview(reviewToBePosted)
        const newReviews = [...reviews, reviewToBePosted] 
        setReviews(newReviews)
        setReview("")
    }
    
    useEffect(
        () => {
            const fetchReviews = async () => {
                const response = await reviewService.findReviewsByMealId(mealDetails.idMeal)
                setReviews(response)
                console.log(response)
            }
            fetchReviews()
        }, [mealDetails]
    )
    return(
        <>
            <div className="row mb-3">
            {reviews.length>0 && (
            <ul>
            {
                reviews.map(review => <li><ReviewCard review = {review}/></li>)
            }
            </ul>
            )}

                {currentUser && (
                <div>
                    <label htmlFor="reviewTextArea">Please leave your review below!</label>
                    <textarea onChange={(e) => setReview(e.target.value)} value = {review} className="form-control" id="reviewTextArea" rows="3"></textarea>
                    <div className="d-flex flex-row-reverse">
                        <button onClick = {postReview} type="button" className="btn btn-primary w-25 mt-2">Post</button>    
                    </div>
                </div>
                )}
            </div>
            
        </>
    )
}

export default Reviews;