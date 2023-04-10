import {useParams} from "react-router";
import * as searchService from './../../services/search-service.js'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
const SearchResults = () => {
    const {searchText} = useParams();
    const [searchResults, setSearchResults] = useState({})
    useEffect( () => {
        const fetchResults = async() => {
            const response = await searchService.searchByMeal(searchText)
            console.log(response)
            setSearchResults(response)
        }
        fetchResults();

    },[searchText])

    return(
        <div className="row mt-2">
            {
                (searchResults.meals != null)?
                <>
                    <h2>
                        Results for: {searchText}
                    </h2>

                    <div className="row">
                        {
                            searchResults.meals && searchResults.meals.map((result) => {
                                return(
                                    <div className="col-5 col-lg-4 col-xl-3 mt-2 p-1" key={result.idMeal}>
                                        <Link to={`/meal/details/${result.idMeal}`} className="text-decoration-none">
                                            <div className="card">
                                                <img className="card-img-top" src={result.strMealThumb} alt="Recipe image"/>
                                                <div className="card-body ">
                                                    <h6 className="card-title">{result.strMeal}</h6>
                                                </div>
                                            </div>
                                        </Link>

                                    </div>
                                )
                            })
                        }
                    </div>
                </>
                :
                <h2>
                    Loading...
                </h2>

            }
        </div>
    )
}

export default SearchResults;