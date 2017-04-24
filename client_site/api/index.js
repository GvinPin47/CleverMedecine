import axios from 'axios';

var loc='http://localhost:3000';

export default {
    listAdmin() {
        return axios.get('http://localhost:3000/user');
    },
    authUser(data)
    {
        return axios.post('http://localhost:3000/login',data)
    }

    
}