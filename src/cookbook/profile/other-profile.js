import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as searchService from "./../../services/search-service.js"
import MealDetails from "../MealDetails";
import MealCards from "../MealCards";
import {Link} from "react-router-dom";
import * as usersService from "../../services/users-service.js"
import * as likesService from "../../services/likes-service.js"
import * as reviewsService from "../../services/reviews-service.js"
import ReviewsByUser from "../Reviews/reviews-by-user";
import {findReviewsByUser} from "../../services/reviews-service.js";
import {useParams} from "react-router";

const OtherProfile = () => {

    const [favorite, setFavorite] = useState(null)
    const [userLikes, setUserLikes] = useState([])
    const [userReviews, setUserReviews] = useState([])
    const [activeTab, setActiveTab] = useState("Likes")
    const dispatch = useDispatch()
    const {userId} = useParams()
    const [otherUser, setOtherUser] = useState({})

    useEffect(() => {
        const fetchUserProfile = async () => {
            const response = await usersService.getUserByID(userId)
            if(response) {
                setOtherUser(response)
            }
        }
        fetchUserProfile()
    }, [])

    useEffect(() => {
        const fetchFavorite = async () => {
            if (userId && userId.role === "chef" && userId.favorite) {
                const response = await searchService.getMealDetails(otherUser.favorite)
                setFavorite(response)
            }
        }

        const fetchLikesByUser = async() => {
            if(userId) {
                const response = await likesService.findLikesByUser(userId)
                setUserLikes(response.reverse())
            }
        }

        const fetchReviewsByUser = async() => {
            if(userId) {
                const response = await reviewsService.findReviewsByUser(userId)
                setUserReviews(response.reverse())
            }
        }

        fetchFavorite()
        fetchLikesByUser()
        fetchReviewsByUser()

    }, [otherUser])

    const switchActiveTab = (event) => {
        if(event.target.innerHTML === "Likes") {
            setActiveTab("Likes")
        }
        else {
            setActiveTab("Reviews")
        }
    }

    return(
        (otherUser)?
        <div className="row mt-2">
            <h3 className="bg-success bg-opacity-10 p-2 rounded-3 text-center">Profile</h3>

            <div className="row ms-lg-5">
                <div className="d-none d-md-block col-2 pt-3 pb-1 text-md-center border rounded-3">
                    <div className="row">
                        <span className="fs-1"><i className="fa-regular fa-id-badge fa-xl"></i></span>
                    </div>
                    <div className="row mt-3">
                        <span className="fw-bold fs-4 text-primary">{otherUser.userName}</span>
                        <span className="wd-graded-out-font-color">{otherUser.role}</span>
                    </div>

                </div>
                <div className="col-11 col-md-7 ms-3">
                    <div className="row border-bottom mb-2">
                        <div className="col-6">
                            <span className="fw-bold">Name</span>
                        </div>
                        <div className="col-6">
                            <span>{otherUser.name}</span>
                        </div>
                    </div>
                    <div className="row border-bottom mb-2">
                        <div className="col-6">
                            <span className="fw-bold">User Name</span>
                        </div>
                        <div className="col-6">
                            <span>{otherUser.userName}</span>
                        </div>
                    </div>
                    <div className="row border-bottom mb-2">
                        <div className="col-6">
                            <span className="fw-bold">Role</span>
                        </div>
                        <div className="col-6">
                            <span>{otherUser.role}</span>
                        </div>
                    </div>

                    <div className="row border-bottom">
                        <div className="col-6">
                            <span className="fw-bold">Interested Category</span>
                        </div>
                        <div className="col-6">
                            <span>{otherUser.category}</span>
                        </div>
                    </div>
                </div>
            </div>

            {
                (favorite)?
                <div className="row mt-4 ms-2 w-md-75">
                    <h4>Favorite <i className="fa-solid fa-star fa-sm text-warning"></i></h4>
                    <MealCards meals={favorite.meals}/>
                </div>
                          : ""
            }
            <div className="row mt-4 ms-1 border-bottom">
                <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                        <button className={`nav-link ${(activeTab==='Likes')? 'active' : 'text-black'}`} onClick={switchActiveTab}>Likes</button>
                    </li>
                    <li className="nav-item">
                        <button className={`nav-link ${(activeTab==='Reviews')? 'active' : 'text-black'}`} onClick={switchActiveTab}>Reviews</button>
                    </li>

                </ul>
            </div>

            <div className="row mb-3 mt-3">
                {
                    (activeTab === "Likes")?
                    <>
                        <h4>Likes</h4>
                        {
                            (userLikes.length > 0)? <MealCards meals = {userLikes}/>
                                                  : <div className="row ms-3"> No likes yet... </div>
                        }
                    </>
                                           :
                    <>
                        <h4>Reviews</h4>
                        {
                            (userReviews.length > 0)? <ReviewsByUser reviews = {userReviews}/>
                                                    : <div className="row ms-3"> No reviews yet... </div>
                        }
                    </>
                }


            </div>

        </div>

                     :

        <h3 className="mt-3 ms-3">User you are trying to find doesn't exists</h3>

    )
}

export default OtherProfile;