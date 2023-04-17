
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as favoriteService from './../../services/favorites-service'
import * as likesService from "../../services/likes-service";


const LikesButtons = ({idMeal, mealName, thumbNail}) => {
    const {currentUser} = useSelector(state => state.user)
    const [likes, setLikes] = useState([])
    const [renderLikes, setRenderLikes] = useState({})
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        const fetchMealLikes = async () => {
            const responses = await likesService.findLikesByMeal(idMeal)
            setLikes(responses)
        }
        const fetchMealFavorites = async() => {
            const response = await favoriteService.findFavoritesByMeal(idMeal)
            setFavorites(response)
        }

        fetchMealLikes()
        fetchMealFavorites()

    },[idMeal])

    useEffect(() => {
        const fetchMealInteractions = async () => {
            const chefLikes = likes.filter((like) => like.role === "chef" || like.role === "admin").length
            const userLikes = likes.filter((like) => like.role === "user").length
            const chefFavorites = favorites.length
            let liked = false
            if (currentUser && likes.find(like => like.user === currentUser._id)) {
                liked = true
            }

            let favorited = false
            if (currentUser && favorites.find(fav => fav._id === currentUser._id)) {
                favorited = true
            }

            setRenderLikes({chefLikes, userLikes, chefFavorites, liked, favorited})
        }
        fetchMealInteractions()

    },[likes, favorites])

    const toggleLikeChef = async () => {
        if (currentUser) {
            if (currentUser.role !== 'user') {
                let response
                let likesCount = renderLikes.chefLikes
                if(renderLikes.liked) {
                    response = await likesService.deleteLike(idMeal)
                    likesCount--;
                }
                else {
                    response = await likesService.createLike({idMeal, strMeal: mealName, strMealThumb: thumbNail})
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
                    likesCount--;
                }
                else {
                    response = await likesService.createLike({idMeal, strMeal: mealName, strMealThumb: thumbNail})
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

    const toggleFavorite = async () => {
        if (currentUser) {
            if (currentUser.role !== 'user') {
                let response
                let favsCount = renderLikes.chefFavorites
                if(renderLikes.favorited) {
                    response = await favoriteService.deleteFavorite(idMeal)
                    console.log(response)
                    favsCount--;
                }
                else {
                    response = await favoriteService.createFavorite(idMeal)
                    console.log(response)
                    favsCount++;
                }
                if (!response.error) {
                    const newRenderLikes = {
                        ...renderLikes,
                        favorited: !renderLikes.favorited,
                        chefFavorites: favsCount
                    }
                    setRenderLikes(newRenderLikes)
                }

            }
        }
    }

    return(
            <div className="row">
                <div className={`col-4`}>
                    <button className={`d-flex border-0 bg-white ${(!currentUser)? 'wd-graded-out-font-color' : (currentUser && currentUser.role !== 'user')? 'text-black' : 'wd-graded-out-font-color'}`} onClick={toggleLikeChef} title="Chef likes">
                        <span className={`me-2 ${(currentUser && renderLikes.liked && currentUser.role !== "user")? "text-primary": ""}`}><i className="fa-solid fa-utensils"></i></span>
                        <span>{renderLikes.chefLikes}</span>
                    </button>
                </div>
                <div className={`col-4 ${(currentUser && currentUser.role === 'user')? 'text-black' : '' }`}>
                    <button className={`d-flex border-0 bg-white ${(!currentUser)? 'wd-graded-out-font-color' : (currentUser && currentUser.role === 'user')? 'text-black' : 'wd-graded-out-font-color'}`} onClick={toggleLikeUser} title="User likes">
                        <span className={`me-2 ${(currentUser && renderLikes.liked && currentUser.role === "user")? "text-danger": ""}`}><i className="fa-solid fa-apple-whole"></i></span>
                        <span>{renderLikes.userLikes}</span>
                    </button>
                </div>
                <div className={`col-4`}>
                    <button className={`d-flex border-0 bg-white ${(!currentUser)? 'wd-graded-out-font-color' : (currentUser && currentUser.role !== 'user')? 'text-black' : 'wd-graded-out-font-color'}`} onClick={toggleFavorite} title="Chef favorites">
                        <span className={`me-2 ${(currentUser && renderLikes.favorited && currentUser.role !== "user")? "text-warning": ""}`}><i className="fa-solid fa-star"></i></span>
                        <span>{renderLikes.chefFavorites}</span>
                    </button>
                </div>

            </div>



    )
}


export default LikesButtons;