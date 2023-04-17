import React from "react";
import NavigationSidebar from "./NavigationSidebar";
import TopNavigationbar from "./TopNavigationbar";
import SearchResults from './SearchResults';
import {Route, Routes} from "react-router";
import Home from "./Home";
import MealDetails from "./MealDetails";
import CategoryList from "./MealCategories";
import "./index.css";
import MealsbyCategory from "./MealsByCategory";
import Login from "./Login";
import SignUp from "./SignUp"
import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./reducers/users-reducer";
import {Provider} from "react-redux";
import Profile from "./profile";
import LoadLoggedInUser from "./LoadLoggedInUser";

const store = configureStore({reducer: {user:usersReducer}})

const Cookbook = () => {
    return(
        <Provider store={store}>
            <LoadLoggedInUser>
                <div className="row mt-3">
                    <div className="col-2">
                        <NavigationSidebar/>

                    </div>
                    <div className="col-10">
                        <div className="row">
                            <TopNavigationbar/>
                        </div>

                        <Routes>
                            <Route path="meal/home" element={<Home/>}/>
                            <Route path="meal/search/:searchText" element={<SearchResults/>}/>
                            <Route path="meal/details/:mealId" element={<MealDetails/>}/>
                            <Route path="meal/users/login" element={<Login/>}/>
                            <Route path="meal/users/signup" element={<SignUp/>}/>
                            <Route path="meal/users/profile" element={<Profile/>}/>
                            <Route path="meal/categories" element={<CategoryList/>}/>
                            <Route path="meal/categories/:categoryString" element={<MealsbyCategory/>}/>
                        </Routes>

                    </div>
                </div>
            </LoadLoggedInUser>

        </Provider>


    )

}

export default Cookbook;
