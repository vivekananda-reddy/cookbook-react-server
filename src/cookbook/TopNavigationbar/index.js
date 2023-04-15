import {useState} from "react";
import {useNavigate} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {logoutThunk} from "../Thunks/users-thunk";
const TopNavigationbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();
    const {currentUser} = useSelector(state => state.user);
    const dispatch = useDispatch();

    const updateSearchField = (event) => {
        setSearch(event.target.value)
    }

    const searchMeal = () => {
        navigate(`meal/search/${search}`)
    }

    const goToLogin = () => {
        navigate('meal/users/login')
    }

    const goToLogout = async() => {
        await(dispatch(logoutThunk()))
        navigate('meal/users/login')
    }

    return(
        <>
            <div className="col-8 col-lg-6">
                <div className="p-1 bg-light rounded rounded-pill shadow-sm mb-2">
                    <div className="input-group">
                        <input type="search" className="form-control border-0 rounded-pill bg-light"  placeholder="Search" onChange={updateSearchField} value={search}/>
                        <div className="input-group-append">
                            <button className="btn btn btn-link text-primary" type="button" onClick={searchMeal}>
                                <i className="bi bi-search"></i></button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-4 col-lg-6">
                {
                    (currentUser)?
                    <button className="btn rounded-pill float-end text-primary border border-1" type="button" onClick={goToLogout}>
                        <span class="fa-stack fa-1x">
                            <i className="fa-solid fa-circle fa-stack-2x"></i>
                            <i className={`fa-solid fa-${currentUser.name[0].toLowerCase()} fa-stack-1x fa-inverse`}></i>
                        </span>Logout</button>
                    :
                    <button className="btn rounded-pill float-end text-primary border border-1" type="button" onClick={goToLogin}>
                        <i className="bi bi-person-circle"></i> Login</button>

                }


            </div>
        </>


    )
}

export default TopNavigationbar;