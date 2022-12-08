import axios from "axios";

const axiosConfig = (token = null) => {
    const instance = axios.create({
        baseURL: process.env.REACT_APP_SERVER_URL
    })
    
    instance.interceptors.request.use(function (config) {
        
        config.headers = {
            authorization: token ? `Bearer ${token}` : ''
        }
        console.log(config)
        return config
    }, function(e) {
        return Promise.reject(e)
    })
    
    
    instance.interceptors.response.use(function(response) {
    
        return response
    }, function(e) {
    
        return Promise.reject(e)
    })

    return instance
}
export default axiosConfig