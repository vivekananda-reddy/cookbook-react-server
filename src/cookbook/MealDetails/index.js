import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import * as searchService from "../../services/search-service";

const MealDetails = () => {
    const {mealId} = useParams();
    const [mealDetails, setMealDetails] = useState({});
    let navigate = useNavigate();

    useEffect( () => {
        const fetchMealDetails = async() => {
            const response = await searchService.getMealDetails(mealId)
            response.meals[0].strYoutube = response.meals[0].strYoutube.replace("watch?v=","embed/")
            console.log(response.meals[0])
            setMealDetails(response.meals[0])

        }
        fetchMealDetails();

    },[mealId])

    const populateIngredients = () => {
        let ing = []
        for(var key in mealDetails) {
            if(key.indexOf('strIngredient') == 0 && mealDetails[key] != null && mealDetails[key]!== "") {
                let measureKey = "strMeasure" + key.substring(13)
                ing.push(mealDetails[key] + " " + "(" + mealDetails[measureKey] +")")

            }
        }
        return ing.join(", ")
    }

    return(
        <>
            <div className="row mt-1">
                <a href="#" onClick={() => navigate(-1)}><i className="bi bi-arrow-left-short"></i> Back</a>
            </div>
            <div className="row mt-2">
                <h2>{mealDetails.strMeal}</h2>
            </div>
            <div className="row mt-1">

                <div className="col-4">
                    <img className="card-img-top rounded-2" src={mealDetails.strMealThumb} alt="Recipe"/>
                </div>
                <div className="col-8">
                    <div className="row">
                        <h5>Category</h5>
                        <p>{mealDetails.strCategory}</p>

                    </div>
                    <div className="row">
                        <h5>Region</h5>
                        <p>{mealDetails.strArea}</p>

                    </div>

                    <div className="row">
                        <h5>Ingredients</h5>
                        <p>{populateIngredients()}</p>

                    </div>
                    <div className="row">
                        <h5>Instructions</h5>
                        <p>{mealDetails.strInstructions}</p>
                    </div>

                    <div className="row mb-3">
                        <h5>Video</h5>
                        <div className="embed-responsive embed-responsive-16by9">
                            <iframe className="embed-responsive-item" src={mealDetails.strYoutube} allowFullScreen></iframe>
                        </div>
                    </div>

                </div>
            </div>
        </>

    )
}

export default MealDetails;