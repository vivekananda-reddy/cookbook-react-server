import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

const NavigationSidebar = ({defaultPage}) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = (paths[paths.length-1] ==='')? defaultPage:paths[paths.length-1];

    const {currentUser} = useSelector(state => state.user)

    return (
        <>
            <div className="list-group col-sm-10 col-lg-9 col-xl-12 sticky-top">
                <Link to="/meal/home" className="list-group-item list-group-item-action pt-2 pb-2 ps-0 border-0 text-success">
                    <span className="ms-md-3 ms-xl-0"><i className="fa-solid fa-cookie-bite fa-2xl"></i></span>
                    <span className="d-none d-xl-inline fs-4 fw-semibold"> CookBook</span>
                </Link>
                <Link to="/meal/home" className={`list-group-item list-group-item-action mt-3 mb-2 pt-2 pb-2 border-0 rounded-3 ${(active === 'home')? `active`:''}`}>
                    <span className="ms-md-3"><i className="fa-solid fa-house"></i></span>
                    <span className="d-none d-xl-inline ms-2"> Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action mb-2 pt-2 pb-2 border-0 rounded-3 ${(active === 'explore')? `active`:''}`}>
                    <span className="ms-md-3"><i className="fa-solid fa-utensils"></i></span>
                    <span className="d-none d-xl-inline ms-2"> Specials</span>
                </Link>

                <Link to="/meal/categories" className={`list-group-item list-group-item-action mb-2 pt-2 pb-2 border-0 rounded-3 ${(active === 'categories')? `active`:''}`}>
                    <span className="ms-md-3"><i className="fa-solid fa-tags"></i></span>
                    <span className="d-none d-xl-inline ms-2"> Categories</span>
                </Link>

                <Link  href="" className={`list-group-item list-group-item-action mb-2 pt-2 pb-2 border-0 rounded-3 ${(active === 'bookmarks')? `active`:''}`}>
                    <span className="ms-md-3"><i className="fa-solid fa-bookmark"></i></span>
                    <span className="d-none d-xl-inline ms-2"> Bookmarks</span>
                </Link>

                {
                    (currentUser)? <Link to="/meal/users/profile" className={`list-group-item list-group-item-action mb-2 pt-2 pb-2 border-0 rounded-3 ${(active === 'profile' || active === 'edit-profile')? `active`:''}`}>
                                        <span className="ms-md-3"><i className="fa-solid fa-user "></i></span>
                                        <span className="d-none d-xl-inline ms-2"> Profile</span>
                                    </Link> : ""
                }
                {
                    (currentUser)? <Link to="/meal/users" className={`list-group-item list-group-item-action mb-2 pt-2 pb-2 border-0 rounded-3 ${(active === 'users')? `active`:''}`}>
                        <span className="ms-md-3"><i className="fa-solid fa-users"></i></span>
                        <span className="d-none d-xl-inline ms-2">Community</span>
                    </Link> : ""
                }



            </div>

        </>
    )
}

export default NavigationSidebar;