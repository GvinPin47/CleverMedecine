import AppDispatcher from '../dispatcher/AppDispatcher';
import Constants from '../constants/Constants.js';
import api from '../api'

const ProfileActions = {
   
    LoadProfile()
    {
        AppDispatcher.dispatch({
            type:Constants.LOAD_PROFILE_REQUEST
        })
        api.ListProfile()
        .then(({data}) =>
    
        AppDispatcher.dispatch({
           type:Constants.LOAD_PROFILE_SUCCESS,
           profile:data,
                   })
        
        ).catch(err =>
            AppDispatcher.dispatch({
                type: Constants.LOAD_PROFILE_FAIL,
                error: err
            })
        )
    },

    ChangeProfile(data){
        api.ChangeProfile(data)
        .then(()=>this.LoadProfile()).catch(err=>console.error(err))

    }
}

export default ProfileActions;