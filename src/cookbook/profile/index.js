import {useSelector} from "react-redux";

const Profile = () => {
    const {currentUser} = useSelector(state => state.user)

    return(
        (currentUser)? <h2>{currentUser.name}</h2> : <h3>Please login</h3>

    )
}

export default Profile;