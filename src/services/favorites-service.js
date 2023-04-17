import axios from "axios";
const api = axios.create({ withCredentials: true });
const API_BASE =  process.env.REACT_APP_API_BASE;
export const findFavoritesByMeal = async (mealId) => {
    const response = await api.get(`${API_BASE}/meal/${mealId}/favorites`)
    return response.data
}

export const createFavorite = async (mealId) => {
    const response  = await api.put(`${API_BASE}/meal/${mealId}/favorites`)
    return response.data
}

export const deleteFavorite = async (mealId) => {
    const response = await api.delete(`${API_BASE}/meal/${mealId}/favorites`)
    return response.data
}
