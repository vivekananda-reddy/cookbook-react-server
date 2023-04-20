import {Link} from "react-router-dom";

const ReviewByUserCard = ({review}) => {
    return(
        <div className="col-11 col-md-9 col-lg-5 mb-3 ms-4 p-2 bg-secondary bg-opacity-10 rounded-3">

                <div className="row ">

                        <div className="col-4">
                            <div className="row rounded-3">
                                <img src={`${review.strMealThumb}`} className="img-fluid"/>
                            </div>

                        </div>
                        <div className="col-8">
                            <Link to={`/meal/details/${review.idMeal}`} className="text-decoration-none"> <h6>{review.strMeal}</h6>  </Link>
                            <span>{review.reviewText}</span>
                        </div>

                </div>


        </div>
    )
}

export default ReviewByUserCard;