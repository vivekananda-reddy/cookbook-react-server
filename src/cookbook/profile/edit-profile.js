import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import * as userService from "./../../services/users-service"
import {Link} from "react-router-dom";
import {useEffect, useState} from "react";

const EditProfile = () => {
    const {currentUser} = useSelector(state => state.user)


    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [favCat, setFavCat] = useState("")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const dispatch = useDispatch()

    useEffect(() => {
        if(currentUser) {
            setPassword(currentUser.password)
            setEmail(currentUser.email)
            setName(currentUser.name)
            setFavCat(currentUser.category)
        }

    },[currentUser])

    const changePassword = (event) => {
        setPassword(event.target.value)
    }
    const changeEmail = (event) => {
        setEmail(event.target.value)
    }
    const changeName = (event) => {
        setName(event.target.value)
    }

    const changeFavCat = (event) => {
        setFavCat(event.target.value)
    }

    const editUserProfile = async () => {
        //console.log(userName, password,email,name,favCat)
        if (password === "" || email === "" || name === "" || favCat === "") {
            setError("All the below fields are mandatory");
            return
        }
        const user = {
            password, email, name, category: favCat
        }
        console.log(user)
        setError("")
        const {error} = await userService.updateProfile(user)
        console.log(error)
        if(error) {
            setError("Can't edit profile")
        }
        else {
            navigate("/meal/users/profile")
        }
    }

    return (
            (currentUser) ?
                <div className="row ps-lg-5 pt-lg-4">
                    <h3 className="ms-lg-5">Edit Profile</h3>
                    <div className="col-lg-7 ms-lg-5">
                        <form>
                            {
                                (error) ? <div className="alert alert-danger" role="alert">
                                    {error}
                                </div> : ""
                            }

                            <div className="form-group m-2">
                                <label htmlFor="InputUserName1">User Name</label>
                                <label className="form-control mt-2 text-secondary fw-bold border-0" id="InputUserName1" >{currentUser.userName}</label>
                            </div>
                            <div className="form-group ms-2 mt-3">
                                <label htmlFor="InputPassword1">Password</label>
                                <input type="password" className="form-control mt-2" onChange={changePassword} value={password} id="InputPassword1" placeholder="Enter Password"/>
                            </div>
                            <div className="form-group ms-2 mt-3">
                                <label htmlFor="InputEmail1">Email</label>
                                <input type="email" className="form-control mt-2" onChange={changeEmail} value={email} id="InputEmail1" placeholder="example@gmail.com" required/>
                            </div>
                            <div className="form-group ms-2 mt-3">
                                <label htmlFor="InputName1">Full Name</label>
                                <input type="text" className="form-control mt-2" onChange={changeName} value={name} id="InputName1" placeholder="John Doe"/>
                            </div>
                            <div className="form-group ms-2 mt-3">
                                <label htmlFor="InputSelection1">Favorite Food Category</label>
                                <select value={favCat} onChange={changeFavCat} className="form-select mt-2">
                                    <option value="Beef">Beef</option>
                                    <option value="Chicken">Chicken</option>
                                    <option value="Dessert">Dessert</option>
                                    <option value="Lamb">Lamb</option>
                                    <option value="Pasta">Pasta</option>
                                    <option value="Pork">Pork</option>
                                    <option value="Seafood">Seafood</option>
                                    <option value="Side">Side</option>
                                    <option value="Starter">Starter</option>
                                    <option value="Vegan">Vegan</option>
                                    <option value="Vegetarian">Vegetarian</option>
                                    <option value="Breakfast">Breakfast</option>
                                </select>
                            </div>
                            <button type="button" onClick={editUserProfile} className="btn btn-primary ms-2 mt-4">Save</button>
                        </form>
                        <div className="row mt-3">
                            <span className="text-secondary fw-bold">
                                <Link to="/meal/users/profile" className="text-decoration-none">Cancel</Link>
                            </span>
                        </div>
                    </div>
                </div>
                :
            <h3>You must login to access this page</h3>
    )
}

export default EditProfile;