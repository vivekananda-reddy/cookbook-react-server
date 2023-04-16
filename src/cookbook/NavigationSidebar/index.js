import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const NavigationSidebar = ({defaultPage}) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = (paths[2]==='')? defaultPage:paths[2];

    const {currentUser} = useSelector(state => state.user)

    return (
        <>
            <div className="list-group col-sm-10 col-lg-9 col-xl-12 sticky-top">
                <Link to="/meal/home" className="list-group-item list-group-item-action pt-2 pb-2 ps-1 pe-1 border-0 text-success">
                    <span className="ms-md-3 ms-xl-0"><i className="fa-solid fa-cookie-bite fa-2xl"></i></span>
                    <span className="d-none d-xl-inline fs-4 fw-semibold"> CookBook</span>
                </Link>
                <Link to="/meal/home" className={`list-group-item list-group-item-action mt-1 pt-3 pb-3 border-0 rounded-3 ${(active === 'home')? `active`:''}`}>
                    <span className="ms-md-3"><i className="fa-solid fa-house"></i></span>
                    <span className="d-none d-xl-inline ms-2"> Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action pt-3 pb-3 border-0 rounded-3 ${(active === 'explore')? `active`:''}`}>
                    <span className="ms-md-3"><i className="fa-solid fa-utensils"></i></span>
                    <span className="d-none d-xl-inline ms-2"> Specials</span>
                </Link>

                <Link to="/meal/categories" className={`list-group-item list-group-item-action pt-3 pb-3 border-0 rounded-3 ${(active === 'categories')? `active`:''}`}>
                    <span className="ms-md-3"><i className="fa-solid fa-tags"></i></span>
                    <span className="d-none d-xl-inline ms-2"> Categories</span>
                </Link>

                <a href="" className={`list-group-item list-group-item-action pt-3 pb-3 border-0 rounded-3 ${(active === 'bookmarks')? `active`:''}`}>
                    <span className="ms-md-3"><i className="fa-solid fa-bookmark"></i></span>
                    <span className="d-none d-xl-inline ms-2"> Bookmarks</span>
                </a>

                {
                    (currentUser)? <Link to="/meal/profile" className={`list-group-item list-group-item-action pt-3 pb-3 border-0 rounded-3 ${(active === 'profile' || active === 'edit-profile')? `active`:''}`}>
                                        <span className="ms-md-3"><i className="fa-solid fa-user "></i></span>
                                        <span className="d-none d-xl-inline ms-2"> Profile</span>
                                    </Link> : ""
                }



            </div>

        </>
    )
}

export default NavigationSidebar;