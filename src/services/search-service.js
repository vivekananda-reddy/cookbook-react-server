import axios from "axios";
const api = axios.create({ withCredentials: true });
const API_BASE =  process.env.REACT_APP_API_BASE;
export const searchByMeal = async (searchString) => {
    const response = await api.get(`${API_BASE}/search/${searchString}`)
    return response.data
}

export const getMealDetails = async (mealId) => {
    const response = await api.get(`${API_BASE}/details/${mealId}`)
    return response.data
}

export const getCategories = async () => {
    const response = await api.get(`${API_BASE}/categories`)
    return response.data
}

export const getMealsbyCategory = async (categoryName) => {
    const response = await api.get(`${API_BASE}/categories/${categoryName}`)
    return response.data
}

export const getRandomMeal = async () => {
    const response = await api.get(`${API_BASE}/random`)
    return response.data
}