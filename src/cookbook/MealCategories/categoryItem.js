import React from "react";
import { Link } from "react-router-dom";
import "../index.css"

const CategoryItem = ({category}) => {
    return(
            <div className="list-group-item list-group-item-action">
                <Link to={category.strCategory} className="wd-link-no-highlight">
                    <div className="row">

                        <div className="col-4 d-flex align-items-center">
                            <img className = "wd-img-80pc" src = {category.strCategoryThumb} alt="Category image"/>
                        </div>

                        <div className="col-8">
                            <span className="fw-bold h3">{category.strCategory}</span><br/>
                            <span>{category.strCategoryDescription}</span>
                        </div>

                    </div>
                </Link>
            </div>
    )
};

export default CategoryItem;