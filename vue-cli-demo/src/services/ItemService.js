import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: false,
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    }
})

export default {
    getItemList() {
        return apiClient.get('/data')
    },
    getItemDetail(id) {
        return apiClient.get('/data/' + id)
    }
}