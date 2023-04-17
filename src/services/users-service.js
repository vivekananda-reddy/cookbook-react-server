import axios from "axios";
const api = axios.create({ withCredentials: true });

const API_BASE =  process.env.REACT_APP_API_BASE + "/users";

export const registerUser = async (user) => {
    const response = await api.post(API_BASE, user)
    console.log(response.data)
    return response.data
}

export const loginUser = async (userCred) => {
    const response = await api.post(`${API_BASE}/login`, userCred)
    console.log(response.data)
    return response.data
}

export const currentProfile = async () => {
    const response = await api.post(`${API_BASE}/profile`)
    console.log(response.data)
    return response.data
}

export const logoutUser = async () => {
    const response = await api.post(`${API_BASE}/logout`)
    console.log(response.data)
    return response.data
}