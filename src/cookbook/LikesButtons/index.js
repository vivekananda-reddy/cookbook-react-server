
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";



import * as likesService from "../../services/likes-service";
const LikesButtons = ({idMeal, mealName, thumbNail}) => {
    const {currentUser} = useSelector(state => state.user)
    const [likes, setLikes] = useState({})
    const [renderLikes, setRenderLikes] = useState({})

    useEffect(() => {
        const fetchMealLikes = async () => {
            const responses = await likesService.findLikesByMeal(idMeal)
            setLikes(responses)
        }
        fetchMealLikes()
    },[idMeal])
    useEffect(() => {
        const fetchMealLikes = async () => {
            const chefLikes = likes.filter((like) => like.role === "chef" || like.role === "admin").length
            console.log(chefLikes)
            const userLikes = likes.filter((like) => like.role === "user").length
            console.log(userLikes)
            let liked = false
            if (currentUser && likes.find(like => like.user === currentUser._id)) {
                liked = true
            }
            setRenderLikes({chefLikes, userLikes, liked})
        }
        fetchMealLikes()
    },[likes])

    const toggleLikeChef = async () => {
        if (currentUser) {
            if (currentUser.role !== 'user') {
                let response
                let likesCount = renderLikes.chefLikes
                if(renderLikes.liked) {
                    response = await likesService.deleteLike(idMeal)
                    console.log(response)
                    likesCount--;
                }
                else {
                    response = await likesService.createLike({idMeal, strMeal: mealName, strMealThumb: thumbNail})
                    console.log(response)
                    likesCount++;
                }
                if (!response.error) {
                    const newRenderLikes = {
                        ...renderLikes,
                        liked: !renderLikes.liked,
                        chefLikes: likesCount
                    }
                    setRenderLikes(newRenderLikes)
                }

            }
        }

    }

    const toggleLikeUser = async () => {
        if (currentUser) {
            if (currentUser.role === 'user') {
                let response
                let likesCount = renderLikes.userLikes
                if(renderLikes.liked) {
                     response = await likesService.deleteLike(idMeal)
                    console.log(response)
                    likesCount--;
                }
                else {
                    response = await likesService.createLike({idMeal, strMeal: mealName, strMealThumb: thumbNail})
                    console.log(response)
                    likesCount++;
                }
                const newRenderLikes = {
                    ...renderLikes,
                    liked: !renderLikes.liked,
                    userLikes: likesCount
                }
                setRenderLikes(newRenderLikes)
            }
        }
    }

    return(
            <div className="row text-muted">
                <div className={`col-5 me-3 ${(currentUser && currentUser.role !== 'user')? 'text-black' : '' }`}>
                    <div className="d-flex" onClick={toggleLikeChef} title="Chef likes">
                        <span className={`pe-3 ${(currentUser && renderLikes.liked && currentUser.role !== "user")? "text-primary": ""}`}><i className="fa-solid fa-utensils"></i></span>
                        <span className="fs-4">{renderLikes.chefLikes}</span>
                    </div>
                </div>
                <div className={`col-5 ms-2 ${(currentUser && currentUser.role === 'user')? 'text-black' : '' }`}>
                    <div className="d-flex" onClick={toggleLikeUser} title="User likes">
                        <span className={`pe-3 ${(currentUser && renderLikes.liked && currentUser.role === "user")? "text-danger": ""}`}><i className="fa-solid fa-apple-whole"></i></span>
                        <span className="fs-4">{renderLikes.userLikes}</span>
                    </div>
                </div>
            </div>



    )
}


export default LikesButtons;