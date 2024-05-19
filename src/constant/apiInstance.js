import axios, { CreateAxiosDefaults } from "axios"



export const apiInstance = {

    create: (CreateAxiosDefaults) => {
        const api = axios.create(CreateAxiosDefaults)
        api.interceptors.request.use((config) => {
            return {
                ...config,
            }
        })


        return api
    }
}