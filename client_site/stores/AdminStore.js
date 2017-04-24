import { EventEmitter } from 'events';

import AppDispatcher from '../dispatcher/AppDispatcher';
import AppConstants from '../constants/Constants';

const CHANGE_EVENT = 'change';

let _adminlist = [];
let _authuser=[];

let _loadingError = null;
let _isLoading = true;

function formatNote(admin) {
   
    return {
        _id: admin._id,
        name: admin.name,
        password: admin.password,

    };

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

    getAdminList() {
        return _adminlist;
    },
    getUser(){
        
        return _authuser;
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
            
            //_authuser = action.user.map( UserAuth );
            _authuser=action.user;
            _loadingError = null;

            TasksStore.emitChange();
            break;
        }
        
        case AppConstants.LOAD_NOTES_REQUEST: {
            _isLoading = true;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_NOTES_SUCCESS: {
            _isLoading = false;
            _adminlist = action.admin.map( formatNote );
            
            _loadingError = null;

            TasksStore.emitChange();
            break;
        }

        case AppConstants.LOAD_NOTES_FAIL: {
            _loadingError = action.error;

            TasksStore.emitChange();
            break;
        }
         case AppConstants.LOAD_USER_FAIL: {
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