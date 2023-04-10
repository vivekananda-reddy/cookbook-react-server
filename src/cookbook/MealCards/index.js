import {Link} from "react-router-dom";

const MealCards = ({meals}) => {

    return (
            meals && meals.map((meal) => {
                return(
                    <div className="col-5 col-lg-4 col-xl-3 mt-2 p-1" key={meal.idMeal}>
                        <Link to={`/meal/details/${meal.idMeal}`} className="text-decoration-none">
                            <div className="card">
                                <img className="card-img-top" src={meal.strMealThumb} alt="Recipe image"/>
                                <div className="card-body ">
                                    <h6 className="card-title">{meal.strMeal}</h6>
                                </div>
                            </div>
                        </Link>

                    </div>
                )
            })
    )
}

export default MealCards;