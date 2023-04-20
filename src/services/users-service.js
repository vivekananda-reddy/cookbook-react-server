import axios from "axios";
const api = axios.create({ withCredentials: true });

const API_BASE =  process.env.REACT_APP_API_BASE + "/users";

export const registerUser = async (user) => {
    const response = await api.post(API_BASE, user)
    return response.data
}

export const registerChef = async (user) => {
    const response = await api.post(`${API_BASE}/chef`, user)
    return response.data
}

export const loginUser = async (userCred) => {
    const response = await api.post(`${API_BASE}/login`, userCred)
    return response.data
}

export const currentProfile = async () => {
    const response = await api.post(`${API_BASE}/profile`)
    return response.data
}

export const logoutUser = async () => {
    const response = await api.post(`${API_BASE}/logout`)
    return response.data
}

export const getAllUsers = async () => {
    const response = await api.get(`${API_BASE}`)
    return response.data
}

export const updateProfile = async (user) => {
    const response = await api.put(`${API_BASE}/edit-profile`, user)
    return response.data
}

export const getUserByID = async (userId) => {
    const response = await api.get(`${API_BASE}/profile/${userId}`)
    return response.data
}