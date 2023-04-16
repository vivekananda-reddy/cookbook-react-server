import axios from "axios";
const api = axios.create({ withCredentials: true });
const API_BASE =  process.env.REACT_APP_API_BASE;
export const findLikesByMeal = async (mealId) => {
    const response = await api.get(`${API_BASE}/meal/${mealId}/likes`)
    return response.data
}

export const findLikesByUser = async (userId) => {
    const response = await api.get(`${API_BASE}/users/${userId}/likes`)
    return response.data
}

export const deleteLike = async (mealId) => {
    const response = await api.delete(`${API_BASE}/meal/${mealId}/likes`)
    return response.data

}

export const createLike = async (like) => {
    const response = await api.post(`${API_BASE}/meal/${like.idMeal}/likes`, like )
    return response.data

}