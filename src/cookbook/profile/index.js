import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as searchService from "./../../services/search-service.js"
import MealDetails from "../MealDetails";
import MealCards from "../MealCards";
import {Link} from "react-router-dom";
import {profileThunk} from "../Thunks/users-thunk";
import * as likesService from "../../services/likes-service.js"

const Profile = () => {
    const {currentUser} = useSelector(state => state.user)
    const [favorite, setFavorite] = useState(null)
    const [userLikes, setUserLikes] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUpdatedProfile = async () => {
            dispatch(profileThunk())
        }


        fetchUpdatedProfile()
    }, [])

    useEffect(() => {
        const fetchFavorite = async () => {
            if (currentUser && currentUser.role === "chef" && currentUser.favorite) {
                const response = await searchService.getMealDetails(currentUser.favorite)
                console.log(response)
                setFavorite(response)
            }
        }

        const fetchLikesByUser=async()=>{
            if(currentUser){
                const response=await likesService.findLikesByUser(currentUser._id)
                setUserLikes(response.reverse())
            }
        }

        fetchFavorite()
        fetchLikesByUser()

    }, [currentUser])

    return(
        (currentUser)?
        <div className="row mt-2">
            <h3 className="bg-success bg-opacity-10 p-2 rounded-3 text-center">Profile</h3>

            <div className="row text-end">
                <Link to="/meal/users/edit-profile" className="text-decoration-none">
                    <button className="btn btn-sm btn-outline-primary rounded-pill">edit-profile <i className="fa-solid fa-pencil"></i> </button>
                </Link>
            </div>

            <div className="row ms-lg-5">
                <div className="d-none d-md-block col-2 pt-3 pb-1 text-md-center border rounded-3">
                    <div className="row">
                        <span className="fs-1"><i className="fa-regular fa-id-badge fa-xl"></i></span>
                    </div>
                    <div className="row mt-3">
                        <span className="fw-bold fs-4 text-primary">{currentUser.userName}</span>
                        <span className="wd-graded-out-font-color">{currentUser.role}</span>
                    </div>

                </div>
                <div className="col-11 col-md-7 ms-3">
                    <div className="row border-bottom mb-2">
                        <div className="col-5">
                            <span className="fw-bold">Name</span>
                        </div>
                        <div className="col-7">
                            <span>{currentUser.name}</span>
                        </div>
                    </div>
                    <div className="row border-bottom mb-2">
                        <div className="col-5">
                            <span className="fw-bold">User Name</span>
                        </div>
                        <div className="col-7">
                            <span>{currentUser.userName}</span>
                        </div>
                    </div>
                    <div className="row border-bottom mb-2">
                        <div className="col-5">
                            <span className="fw-bold">Role</span>
                        </div>
                        <div className="col-7">
                            <span>{currentUser.role}</span>
                        </div>
                    </div>
                    <div className="row border-bottom mb-2">
                        <div className="col-5">
                            <span className="fw-bold">Email</span>
                        </div>
                        <div className="col-7">
                            <span>{currentUser.email}</span>
                        </div>
                    </div>
                    <div className="row border-bottom">
                        <div className="col-5">
                            <span className="fw-bold">Interested Category</span>
                        </div>
                        <div className="col-7">
                            <span>{currentUser.category}</span>
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
            <div className="row mt-4 border-bottom">
                <ul className="nav nav-pills nav-justified">
                    <li className="nav-item">
                        <button className="nav-link active">Likes</button>
                    </li>
                    <li className="nav-item">
                        <button className="nav-link">Reviews</button>
                    </li>

                </ul>
            </div>

            <div className="row mb-3 mt-3">
                <h4>Likes</h4>
                {
                    (userLikes.length > 0)? <MealCards meals = {userLikes}/>
                                          : <div className="row ms-3"> No likes yet... </div>
                }

            </div>

        </div>

                     :

        <h3 className="mt-3 ms-3">Please login to view profile</h3>

    )
}

export default Profile;