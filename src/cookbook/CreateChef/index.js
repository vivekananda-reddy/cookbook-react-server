import {Link} from "react-router-dom";
import {useEffect, useState} from "react";
import {registerChef} from "../../services/users-service";
import {useNavigate, Navigate} from "react-router";
import {useSelector} from "react-redux";
const CreateChef = () => {

    const [userName, setUserName] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")
    const [name, setName] = useState("")
    const [favCat, setFavCat] = useState("Beef")
    const [error, setError] = useState("")
    const navigate = useNavigate()
    const {currentUser} = useSelector(state => state.user)


    const changeUserName = (event) => {
        setUserName(event.target.value)
    }

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

    const createChefClick = async () => {
        //console.log(userName, password,email,name,favCat)
        if (userName === "" || password === "" || email === "" || name === "" || favCat === "") {
            setError("All the below fields are mandatory");
            return
        }
        const user = {
            userName, password, email, name, role:"chef", category: favCat
        }
        setError("")
        try {
            await registerChef(user)
            navigate('/meal/users')
        }
        catch (e) {
            console.log(e.message)
            setError("Username already exists")
        }
    }

    if(!(currentUser && currentUser.role === "admin")) {
        return (<h3 className="mt-4 ms-4">You don't have access to view this page</h3>)
    }
    return (
        <div className="row ps-lg-5 pt-lg-4">

            <h3 className="ms-lg-5">Register Chef</h3>
            <div className="col-lg-7 ms-lg-5">
                <form>
                    {
                        (error) ? <div className="alert alert-danger" role="alert">
                            {error}
                        </div> : ""
                    }

                    <div className="form-group m-2">
                        <label htmlFor="InputUserName1">User Name</label>
                        <input type="text" className="form-control mt-2" onChange={changeUserName} value={userName} id="InputUserName1" placeholder="Enter User Name"/>
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
                            <option value="Goat">Goat</option>
                        </select>
                    </div>
                    <button type="button" onClick={createChefClick} className="btn btn-primary ms-2 mt-4">Create</button>
                    <Link to="/meal/users" className="text-decoration-none ms-4 align-bottom">Cancel</Link>
                </form>

                <div className="row mt-3 ms-1 mb-2">

                </div>



            </div>


        </div>
    )
}

export default CreateChef;