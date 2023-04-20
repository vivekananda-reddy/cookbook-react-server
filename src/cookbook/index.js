import React, {useReducer} from "react";
import NavigationSidebar from "./NavigationSidebar";
import TopNavigationbar from "./TopNavigationbar";
import SearchResults from './SearchResults';
import {Route, Routes} from "react-router";
import Home from "./Home";
import MealDetails from "./MealDetails";
import CategoryList from "./MealCategories";
import MealsbyCategory from "./MealsByCategory";
import Login from "./Login";
import SignUp from "./SignUp"
import {configureStore} from "@reduxjs/toolkit";
import usersReducer from "./reducers/users-reducer";
import {Provider} from "react-redux";
import Profile from "./profile";
import LoadLoggedInUser from "./LoadLoggedInUser";
import AllUsers from "./AllUsers";
import CreateChef from "./CreateChef";
import EditProfile from "./profile/edit-profile";

const store = configureStore({reducer: {user:usersReducer}})

const Cookbook = () => {
    return(
        <Provider store={store}>
            <LoadLoggedInUser>
                <div className="row mt-3">
                    <div className="col-2">
                        <NavigationSidebar defaultPage="home"/>
                    </div>
                    <div className="col-10">
                        <div className="row border-bottom sticky-top bg-white">
                            <TopNavigationbar/>
                        </div>

                        <Routes>
                            <Route index element={<Home/>}/>
                            <Route path="meal/home" element={<Home/>}/>
                            <Route path="meal/search/:searchText" element={<SearchResults/>}/>
                            <Route path="meal/details/:mealId" element={<MealDetails/>}/>
                            <Route path="meal/users/login" element={<Login/>}/>
                            <Route path="meal/users/signup" element={<SignUp/>}/>
                            <Route path="meal/users/profile" element={<Profile/>}/>
                            <Route path="meal/users/edit-profile" element={<EditProfile/>}/>
                            <Route path="meal/users" element={<AllUsers/>}/>
                            <Route path="meal/users/register-chef" element={<CreateChef/>}/>
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
