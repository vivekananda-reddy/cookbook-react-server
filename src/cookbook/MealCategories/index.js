import * as searchService from './../../services/search-service.js';
import {useEffect, useState} from "react";
import CategoryItem from "./categoryItem";


const CategoryList = () => {
    let [Categories, setCategories] = useState([])
    useEffect(
        () => {
            const fetchCategories = async () => {
                const response = await searchService.getCategories();
                console.log(response['categories'])
                setCategories(response['categories'])
            };
            fetchCategories()
        },[]
    )
    return(
        <div className='list-group mb-2'>
            {
                Categories.map(
                    item => <CategoryItem key={item.idCategory} category = {item}/>
                )
            }
        </div>
    )
}

export default CategoryList;
