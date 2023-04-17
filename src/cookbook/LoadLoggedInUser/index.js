import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {profileThunk} from "../Thunks/users-thunk";

const LoadLoggedInUser = ({children}) => {

    const {currentUser} = useSelector(state => state.user)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(profileThunk())

    }, [])
    return children
}

export default LoadLoggedInUser