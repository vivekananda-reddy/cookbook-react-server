import React from "react";

const CategoryItem = ({category}) => {
    return(
        <div className="list-group-item">
            <div className="row">

                <div className="col-4 d-flex align-items-center">
                    <img className = "wd-img-80pc" src = {category.strCategoryThumb}/>
                </div>

                <div className="col-8">
                    <span className="fw-bold h3">{category.strCategory}</span><br/>
                    <span>{category.strCategoryDescription}</span>
                </div>

            </div>
        </div>
    )
};

export default CategoryItem;