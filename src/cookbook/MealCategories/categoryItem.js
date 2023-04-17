import React from "react";
import { Link } from "react-router-dom";

const CategoryItem = ({category}) => {
    return(
            <div className="list-group-item list-group-item-action">
                <Link to={category.strCategory} className="text-decoration-none">
                    <div className="row">

                        <div className="col-4 d-flex align-items-center">
                            <img className = "rounded-3" src = {category.strCategoryThumb} alt="Category image"/>
                        </div>

                        <div className="col-8">
                            <span className="fw-bold h3">{category.strCategory}</span><br/>
                            <span className="text-black">{category.strCategoryDescription}</span>
                        </div>

                    </div>
                </Link>
            </div>
    )
};

export default CategoryItem;