import axios from 'axios'

export const api = axios.create( {
    baseURL : "https://melody-restaurant-api.vercel.app/"
})