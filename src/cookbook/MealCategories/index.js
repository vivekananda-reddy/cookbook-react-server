import * as searchService from './../../services/search-service.js';
import {useEffect, useState} from "react";
import CategoryItem from "./categoryItem";


const CategoryList = () => {
    let [Categories, setCategories] = useState([])
    useEffect(
        () => {
            const fetchCategories = async () => {
                const response = await searchService.getCategories();
                setCategories(response)
            };
            fetchCategories()
        },[]
    )
    return(
        <>
        {
            (Categories.categories != null) ?
                <div className='list-group mb-2'>
                    {
                        Categories.categories.map(
                            item => <CategoryItem key={item.idCategory} category = {item}/>
                        )
                    }
                </div>
            : <span className="position-absolute top-50 start-50"><i className="fa-solid fa-cookie-bite fa-spin fa-spin-reverse fa-2xl"></i></span>
        }
        </>
    )
}

export default CategoryList;
