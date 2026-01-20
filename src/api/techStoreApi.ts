import axios from 'axios'

const techStoreApi = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

export { techStoreApi };