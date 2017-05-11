import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants.js';
import api from '../api'

const ListAdminActions = {
   
    LoadAdminList()
    {
        AppDispatcher.dispatch({
            type:Constants.LOAD_ADMINLIST_REQUEST
        })
        api.ListAdmin()
        .then(({data}) =>
    
        AppDispatcher.dispatch({
           type:Constants.LOAD_ADMINLIST_SUCCESS,
           lpuadmin:data,
                   })
        
        ).catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_ADMINLIST_FAIL,
                error: err
            })
        )
    },

}

export default ListAdminActions;