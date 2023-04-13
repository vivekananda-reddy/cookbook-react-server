import {Link} from "react-router-dom";

const Login = () => {
    return (
            <div className="row p-lg-5">
                    <h3 className="ms-lg-5">Login</h3>
                <div className="col-lg-7 ms-lg-5">
                    <form>
                        <div className="form-group m-2">
                            <label htmlFor="InputUserName1">User Name</label>
                            <input type="text" className="form-control mt-2" id="InputUserName1" placeholder="Enter User Name"/>
                        </div>
                        <div className="form-group ms-2 mt-3">
                            <label htmlFor="InputPassword1">Password</label>
                            <input type="password" className="form-control mt-2" id="InputPassword1" placeholder="Password"/>
                        </div>

                        <button type="submit" className="btn btn-primary ms-2 mt-4">Log In</button>
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