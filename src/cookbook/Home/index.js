import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import * as searchService from "../../services/search-service";
import {Link} from "react-router-dom";
import * as likesService from "../../services/likes-service"
import MealCards from "../MealCards";

const Home = () => {
    const { currentUser } = useSelector((state) => state.user);
    const [meals, setMeals] = useState([])
    const [randomMeal, setRandomMeal] = useState([])
    const [userLikes, setUserLikes] = useState([])
    const categories =["Beef", "Chicken", "Dessert", "Lamb", "Pasta", "Pork", "Seafood", "Side", "Starter", "Vegan", "Vegetarian", "Breakfast"]
    let todayCategory = (currentUser)? currentUser.category : categories[((new Date().getDate()) % 12)-1]


    useEffect(() => {
        const fetchMeals = async () => {
            const response = await searchService.getMealsbyCategory(todayCategory)
            setMeals(response.meals)
        }

        const fetchRandomMeal = async () => {
            const response = await searchService.getRandomMeal()
            setRandomMeal((response.meals[0]))
        }

        const fetchLikesByUser = async () => {
            if (currentUser) {
                const response = await likesService.findLikesByUser(currentUser._id)
                setUserLikes(response.reverse().slice(0,4))
            }
        }

        fetchMeals()
        fetchRandomMeal()
        fetchLikesByUser()
    },[currentUser])


    return(
        <>

            <div className="row bg-success bg-opacity-25 p-3 mb-4">
                <h2>
                    Welcome {
                        (currentUser)? currentUser.userName : ""
                    }
                    !
                </h2>
                <hr/>
                <p>
                    Discover an array of mouth-watering recipes here! We offer a wide variety
                    of categories including starters, desserts, vegan and more. We are thrilled to have you
                    here and can't wait for you to explore our collection of delicious recipes. Whether you're a seasoned chef
                    or a novice cook, we have recipes that are sure to satisfy your cravings and
                    inspire you to get creative in the kitchen. Get started by searching for a recipe on the top search bar
                </p>
            </div>

            {
                (currentUser) ?
                    <div className="row mb-3">
                        <h3>Recent Likes</h3>
                        <MealCards meals={userLikes}/>
                    </div>
                        : ""
            }


            {
                (meals && meals.length > 0)?
                <div className="row border p-3 bg-primary bg-opacity-10">
                    <div className="col-12 col-md-6 col-lg-5">
                        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                            <Link to={`/meal/categories/${todayCategory}`}>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <img src={meals[0].strMealThumb} className="d-block w-100  rounded-3" alt="..."/>
                                        <div className="carousel-caption bg-black bg-opacity-50">
                                            <h5>{meals[0].strMeal}</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={meals[1].strMealThumb} className="d-block w-100 rounded-3" alt="..."/>
                                        <div className="carousel-caption bg-black bg-opacity-25">
                                            <h5>{meals[1].strMeal}</h5>
                                        </div>
                                    </div>
                                    <div className="carousel-item">
                                        <img src={meals[2].strMealThumb} className="d-block w-100 rounded-3" alt="..."/>
                                        <div className="carousel-caption bg-black bg-opacity-25">
                                            <h5>{meals[2].strMeal}</h5>
                                        </div>
                                    </div>
                                </div>
                                <button className="carousel-control-prev" type="button"
                                        data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Previous</span>
                                </button>
                                <button className="carousel-control-next" type="button"
                                        data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                    <span className="visually-hidden">Next</span>
                                </button>
                            </Link>

                        </div>
                    </div>
                    <div className="col-12 col-md-6 col-lg-7 text-success d-flex">
                        {
                            (currentUser)?
                            <span className="align-self-center fs-5">Here are some special curated recipes from your favorite category <h5>- {todayCategory}</h5></span>

                                         :
                                <span className="align-self-center fs-5">We pick a special category everyday. Check out recipes from today's category <h5>- {todayCategory}</h5></span>

                        }
                    </div>

                </div>
                : ""
            }

            {
                (randomMeal)?
                <div className="row border p-3 bg-danger bg-opacity-10 mt-3 mb-3">
                    <div className="col-12 col-md-8 d-flex align-items-center">
                        <span className="fs-5 text-black text-opacity-75">Confused on which recipe to pick? Here is one we picked for you <h5>- {randomMeal.strMeal}</h5> </span>

                    </div>
                    <div className="col-12 col-md-4">
                        <Link to={`/meal/details/${randomMeal.idMeal}`}>
                            <img src={randomMeal.strMealThumb} className="img-fluid float-end rounded-3" />
                        </Link>
                    </div>
                </div> : ""
            }
        </>

    )
}

export default Home;