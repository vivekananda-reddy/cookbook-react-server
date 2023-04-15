import {useState} from "react";
import {useSelector} from "react-redux";

const Home = () => {
    const { currentUser } = useSelector((state) => state.user);
    return(
        <>
            <h1>Home</h1>
            {
                (currentUser)? currentUser.userName : ""


            }
        </>

    )
}

export default Home;