import axios from 'axios'

axios.interceptors.request.use((config) => {
    config.baseURL = `${process.env.VITE_BACKEND_URL}/`;
  //  config.withCredentials = true

    return config
})

const clientAxios = axios.create({
    baseURL: `${process.env.VITE_BACKEND_URL}/`,
  //  withCredentials : true

})

export default clientAxios;