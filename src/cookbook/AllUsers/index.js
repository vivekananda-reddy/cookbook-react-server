import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import * as userService from "../../services/users-service"
import UserCards from "./user-cards";
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";
const AllUsers = () => {
    const {currentUser} = useSelector(state => state.user)
    const [usersData, setUsersData] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const fetchUsers = async() => {
            const response = await userService.getAllUsers()
            setUsersData(response)
        }
        fetchUsers()

    }, [currentUser])

    return(
        <div className="row mt-2">
            <h2>Community {(currentUser && currentUser.role === "admin")? <Link to="/meal/users/register-chef" className="btn btn-sm border-primary text-primary rounded-3 ms-3">
                <span className="me-1 ms-1"><i className="fa-solid fa-user-plus"></i></span> Add Chef</Link> : ""}</h2>
            <div className="row">
                { (usersData)?
                  <UserCards usersData = {usersData}/> : ""
                }
            </div>

        </div>


    )
}

export default AllUsers;