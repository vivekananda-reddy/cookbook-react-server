import {useNavigate, useParams} from "react-router";
import {useEffect, useState} from "react";
import * as searchService from "../../services/search-service";
import LikesButtons from "../LikesButtons";

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

                <div className="col-8 col-md-5 col-lg-4">
                    <img className="card-img-top rounded-2" src={mealDetails.strMealThumb} alt="Recipe"/>
                    <div className="d-flex justify-content-center fs-4 mt-2 mb-3 pb-2 pt-2 border-top border-bottom">
                        <LikesButtons idMeal={mealDetails.idMeal} mealName={mealDetails.strMeal} thumbNail={mealDetails.strMealThumb}/>
                    </div>
                </div>
                <div className="col-12 col-md-7 col-lg-8">
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
                        <iframe className="embed-responsive-item" style={{height:380}} src={mealDetails.strYoutube}></iframe>

                    </div>

                </div>
            </div>
        </>

    )
}

export default MealDetails;