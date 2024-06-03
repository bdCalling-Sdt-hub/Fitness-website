import axios from 'axios'
const axiosRequest = axios.create({
    baseURL: '',
})
const AxiosRequest = () => {
    return axiosRequest
}

export default AxiosRequest
