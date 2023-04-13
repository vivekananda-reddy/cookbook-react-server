import axios from "axios";

const API_BASE =  process.env.REACT_APP_API_BASE + "/users";

export const registerUser = async (user) => {
    const response = await axios.post(API_BASE, user)
    console.log(response.data)
    return response.data
}