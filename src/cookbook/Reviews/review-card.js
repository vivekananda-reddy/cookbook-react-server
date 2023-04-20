import React from "react";
import {Link} from "react-router-dom";

const ReviewCard = ({review}) => {
    return(
        <div className="row bg-secondary bg-opacity-10 mt-1 p-2">
            <div className="d-none d-sm-block col-sm-3 col-md-2">
                <span className={`fa-stack fa-2x ${(review.user.role === "admin")? 'text-danger': (review.user.role === "chef")? 'text-success':'text-primary'}`}>
                    <i className="fa-solid fa-circle fa-stack-2x"></i>
                    <i className={`fa-solid fa-${review.user.name[0].toLowerCase()} fa-stack-1x fa-inverse`}></i>
                </span>
            </div>
            <div className="col-12 col-sm-9 col-md-10">
                <div className="row">
                    <div className="col-6">
                        <Link to="/meal/users/profile/:uid" className="text-decoration-none fw-semibold fs-5">{review.user.name}</Link>
                    </div>
                    <div className="col-6">
                        <span className="float-end text-secondary">{new Date(review.createdAt).toDateString()}</span>
                    </div>
                </div>
                <div className="row">
                    <span className="text-secondary">{review.user.userName}</span>
                </div>
                <div className="row mt-2 mb-1">
                    <span className="fw-semibold">{review.reviewText}</span>
                </div>
            </div>

        </div>
    )
};
export default ReviewCard;