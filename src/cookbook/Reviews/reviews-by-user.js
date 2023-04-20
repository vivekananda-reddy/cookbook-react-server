import ReviewByUserCard from "./review-by-user-card";

const ReviewsByUser = ({reviews}) => {
    return(
        <div className="row mt-2">
            {reviews && reviews.map((review) => <ReviewByUserCard key={review._id} review = {review}/>)}
        </div>
    )
}

export default ReviewsByUser;