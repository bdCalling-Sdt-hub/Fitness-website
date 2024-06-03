import axios from 'axios'
const axiosRequest = axios.create({
    baseURL: 'http://192.168.10.116:8000',
    withCredentials:true
})
const AxiosRequest = () => {
    return axiosRequest
}

export default AxiosRequest
