import axios from 'axios';

var loc='http://localhost:3000';

export default {
    ListProfile() {
        return axios.get('http://localhost:3000/profile');
        
    },
    authUser(data)
    {
        return axios.post('http://localhost:3000/login',data)
    },
    ChangeProfile(data){
            return axios.post('http://localhost:3000/Changeprofile',data)
    }


    
}