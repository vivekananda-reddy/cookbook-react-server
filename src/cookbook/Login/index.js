import {Link} from "react-router-dom";
import {useState} from "react";
import {useNavigate} from "react-router";
import {loginUser} from "../../services/users-service";
import {loginThunk} from "../Thunks/users-thunk";
import {useDispatch} from "react-redux";

const Login = () => {
    const [userNameLogin, setUserNameLogin] = useState("")
    const [passwordLogin, setPasswordLogin] = useState("")
    const [error, setError] = useState("")

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const changeUserNameLogin = (event) => {
        setUserNameLogin(event.target.value)
    }

    const changePasswordLogin = (event) => {
        setPasswordLogin(event.target.value)
    }

    const logInUserClick = async () => {

        if (userNameLogin === "" || passwordLogin === "" ) {
            setError("All the below fields are mandatory");
            return
        }
        const userCred = {
            userName : userNameLogin,
            password: passwordLogin
        }
        setError("")
        const {error} = await dispatch(loginThunk(userCred))
        if(error) {
            setError("Invalid User name or Password")
        }
        else {
           navigate(-1)
        }
    }

    return (
        <div className="row ps-lg-5 pt-lg-4">
            <h3 className="ms-lg-5">LogIn</h3>
            <div className="col-lg-7 ms-lg-5">
                <form>
                    {
                        (error) ? <div className="alert alert-danger" role="alert">
                            {error}
                        </div> : ""
                    }

                    <div className="form-group m-2">
                        <label htmlFor="InputUserName2">User Name</label>
                        <input type="text" className="form-control mt-2" onChange={changeUserNameLogin} value={userNameLogin} id="InputUserName2" placeholder="Enter User Name"/>
                    </div>
                    <div className="form-group ms-2 mt-3">
                        <label htmlFor="InputPassword2">Password</label>
                        <input type="password" className="form-control mt-2" onChange={changePasswordLogin} value={passwordLogin} id="InputPassword2" placeholder="Enter Password"/>
                    </div>

                    <button type="button" onClick={logInUserClick} className="btn btn-primary ms-2 mt-4">Log In</button>
                </form>
                <div className="row mt-3">
                    <span className="text-secondary fw-bold">
                        Not a member? <Link to="/meal/users/signup" className="text-decoration-none">Sign Up</Link>
                    </span>
                </div>
            </div>


        </div>
    )


}

export default Login;