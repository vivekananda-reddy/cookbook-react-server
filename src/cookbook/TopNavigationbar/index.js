import {useState} from "react";
import {useNavigate} from "react-router";
const TopNavigationbar = () => {
    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    const updateSearchField = (event) => {
        setSearch(event.target.value)
    }

    const searchMeal = () => {
        navigate(`meal/search/${search}`)
    }

    const goToLogin = () => {
        navigate('meal/users/login')
    }

    return(
        <>
            <div className="col-6">
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
            <div className="col-6">
                <button className="btn rounded-pill float-end text-primary border border-1" type="button" onClick={goToLogin}>
                    <i className="bi bi-person-circle"></i> Login</button>

            </div>
        </>


    )
}

export default TopNavigationbar;