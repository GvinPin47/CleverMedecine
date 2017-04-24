import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants.js';

import api from '../api';
const mass={
    name:'Иван',
    password:'12345'
}
const AdminActions = {
   
    loadAdmin() {
        AppDispatcher.dispatch({
            type: Constants.LOAD_NOTES_REQUEST
        });

        api.listAdmin()
        .then(({ data }) =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_NOTES_SUCCESS,
                admin: data
                
            }), 
        )
        .catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_NOTES_FAIL,
                error: err
            })
            
        ); 
    },
    AuthUser(userss)
    {
        AppDispatcher.dispatch({
            type:Constants.LOAD_USER_REQUEST
        })
        api.authUser(userss)
        .then(({data}) =>
        AppDispatcher.dispatch({
           type:Constants.LOAD_USER_SUCCESS,
           user:data
        })
        
        ).catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_USER_FAIL,
                error: err
            })
        )
    }
}

export default AdminActions;