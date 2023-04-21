import {useParams} from "react-router";
import * as searchService from './../../services/search-service.js'
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";
import MealCards from "../MealCards";
const SearchResults = () => {
    const {searchText} = useParams();
    const [searchResults, setSearchResults] = useState({})
    const [waiting, setWaiting] = useState(false)
    useEffect( () => {
        const fetchResults = async() => {
            setWaiting(true)
            const response = await searchService.searchByMeal(searchText)
            setWaiting(false)
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
                        <MealCards meals={searchResults.meals}/>
                    </div>
                </>
                :
                (waiting)?
                <span className="position-absolute top-50 start-50"><i className="fa-solid fa-cookie-bite fa-spin fa-spin-reverse fa-2xl"></i></span>
                :
                <h5 className="mt-3 ms-3">No Results found for: {searchText}</h5>

            }
        </div>
    )
}

export default SearchResults;