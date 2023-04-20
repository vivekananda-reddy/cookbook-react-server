import axios from "axios";
const api = axios.create({ withCredentials: true });
const API_BASE =  process.env.REACT_APP_API_BASE;

export const findReviewsByMealId = async (mealId) => {
    const response = await api.get(`${API_BASE}/meal/${mealId}/reviews`)
    return response.data
}

export const createReview = async (review) => {
    const response = await api.post(`${API_BASE}/reviews`, review)
    return response.data
}