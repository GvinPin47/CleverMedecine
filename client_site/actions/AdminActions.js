import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants.js';

import api from '../api';

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
      
         
    }
}

export default AdminActions;