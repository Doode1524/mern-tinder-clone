import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://joey-tinder-clone-backend.herokuapp.com',
})

export default instance