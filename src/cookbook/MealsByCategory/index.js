import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router";
import * as searchService from './../../services/search-service.js';
import MealCards from "../MealCards";

const MealsbyCategory = () => {
    const {categoryString} = useParams()
    let [Meals, setMeals] = useState([])
    useEffect(
        () => {
            const fetchMealsByCategory = async () => {
                const response = await searchService.getMealsbyCategory(categoryString)
                console.log(response)
                setMeals(response)
            };
            fetchMealsByCategory();
        },
    [])
    const navigate = useNavigate();
    return(
        <div>
            <div className="row mt-1">
                <a href="#" onClick={() => navigate(-1)}><i className="bi bi-arrow-left-short"></i> Back</a>
            </div>
            {
                (Meals.meals != null) ?
                    <>
                        <h2>Meals by a category: {categoryString}</h2>
                        <div className="row">
                            <MealCards meals = {Meals.meals}/>
                        </div>
                    </>
                : <span className="position-absolute top-50 start-50"><i className="fa-solid fa-cookie-bite fa-spin fa-spin-reverse fa-2xl"></i></span>
            }
        </div>
    )
};



export default MealsbyCategory;