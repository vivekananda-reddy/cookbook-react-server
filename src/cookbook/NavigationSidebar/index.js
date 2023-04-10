import {Link, useLocation} from "react-router-dom";

const NavigationSidebar = ({defaultPage}) => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = (paths[2]==='')? defaultPage:paths[2];
    return (
        <>
            <div className="list-group col-sm-8 col-xl-12">
                <Link to="/meal/home" className="list-group-item list-group-item-action p-3 text-success">
                    <span><i className="fa-solid fa-cookie-bite fa-2xl"></i></span>
                    <span className="d-none d-xl-inline fs-5"> Cook Book</span>
                </Link>
                <Link to="/meal/home" className={`list-group-item list-group-item-action ${(active === 'home')? `active`:''}`}>
                    <span><i className="fa-solid fa-house"></i></span>
                    <span className="d-none d-xl-inline"> Home</span>
                </Link>
                <Link to="/tuiter/explore" className={`list-group-item list-group-item-action ${(active === 'explore')? `active`:''}`}>
                    <span><i className="fa-solid fa-utensils"></i></span>
                    <span className="d-none d-xl-inline"> Specials</span>
                </Link>

                <Link to="/meal/categories" className={`list-group-item list-group-item-action ${(active === 'categories')? `active`:''}`}>
                    <span><i className="fa-solid fa-tags"></i></span>
                    <span className="d-none d-xl-inline"> Categories</span>
                </Link>

                <a href="" className={`list-group-item list-group-item-action ${(active === 'bookmarks')? `active`:''}`}>
                    <span><i className="fa-solid fa-bookmark"></i></span>
                    <span className="d-none d-xl-inline"> Bookmarks</span>
                </a>


                <Link to="/tuiter/profile" className={`list-group-item list-group-item-action ${(active === 'profile' || active === 'edit-profile')? `active`:''}`}>
                    <span><i className="fa-solid fa-user "></i></span>
                    <span className="d-none d-xl-inline"> Profile</span>
                </Link>

            </div>
            <div className="d-grid mt-2">
                <a href="tweet.html" className="btn btn-primary btn-block rounded-pill">Create Recipe</a>
            </div>
        </>
    )
}

export default NavigationSidebar;