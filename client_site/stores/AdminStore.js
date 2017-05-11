import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/Constants';

const CHANGE_EVENT = 'change';

let _profileList=[];
let _authuser=[];
let _listLpuAdmin=[];
let _loadingError = null;
let _isLoading = true;


function formatProfile(profile){
    return{
        Firstname:profile.Firstname,
        Lastname:profile.Lastname,
        Email:profile.Email,
        Phone:profile.Phone,
        Sex:profile.Sex
    }
}
function formatListAdmin(lpuadmin){
    
    return{
        _id:lpuadmin._id,
        Number:lpuadmin.Number,
        LpuAdminData:{
           _id:lpuadmin._id,
           Name:lpuadmin.Name,
           Lastname:lpuadmin.Lastname,
           Lpu:lpuadmin.Lpu
        }
    }
}
function UserAuth(user){

    return{
        message:user.message,
        token:user.token
    }
}
const TasksStore = Object.assign({}, EventEmitter.prototype, {
    isLoading() {
        return _isLoading;
    },
    getLpuAdminData(){
        console.log(_listLpuAdmin)
        return _listLpuAdmin
    },
   getProfile(){
       
        return _profileList[1]
   },
    getUser(){
        
        return _authuser
    },
    emitChange() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(action) {
    switch(action.type) {
        case AppConstants.LOAD_USER_REQUEST:{
            _isLoading=true;

            TasksStore.emitChange();
            break;
        }
         case AppConstants.LOAD_USER_SUCCESS: {
            _isLoading = false;
            _authuser=action.user;
            
            _loadingError = null;
             
            TasksStore.emitChange();
            break;
        }
        
         case AppConstants.LOAD_USER_FAIL: {
            _loadingError = action.error;

            TasksStore.emitChange();
            break;
        }

         case AppConstants.LOAD_PROFILE_REQUEST:{
            _isLoading=true;

            TasksStore.emitChange();
            break;
        }
         case AppConstants.LOAD_PROFILE_SUCCESS: {
            _isLoading = false;
            _profileList=action.profile.map(formatProfile);
           
            _loadingError = null;
            TasksStore.emitChange();
            break;
        }
        
         case AppConstants.LOAD_PROFILE_FAIL: {
            _loadingError = action.error;

            TasksStore.emitChange();
            break;
        }

         case AppConstants.LOAD_ADMINLIST_REQUEST:{
            _isLoading=true;

            TasksStore.emitChange();
            break;
        }
         case AppConstants.LOAD_ADMINLIST_SUCCESS: {
            _isLoading = false;
            _listLpuAdmin=action.lpuadmin
            _loadingError = null;
             
            TasksStore.emitChange();
            break;
        }
        
         case AppConstants.LOAD_ADMINLIST_FAIL: {
            _loadingError = action.error;

            TasksStore.emitChange();
            break;
        }

        default: {
            console.log('No such handler');
        }
    }
});

export default TasksStore;