import React from "react"
import TextField from 'material-ui/TextField'
import Paper from "material-ui/Paper"
import {List,ListItem} from "material-ui/List"
import Avatar from 'material-ui/Avatar'
import Dialog from 'material-ui/Dialog'
import createReactClass from "create-react-class"
import FlatButton from'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import "./Profile.less"

import ProfileActions from "/Project's/CleverMedecine0.0.1/client_site/actions/ProfileActions.js"
import AdminStore from "/Project's/CleverMedecine0.0.1/client_site/stores/AdminStore.js"
import ListProfile from './ListProfile.jsx'
import DialogComp from './DialogComp.jsx'


const Profile=createReactClass({

getInitialState(){
return{
     isLoading: AdminStore.isLoading(),
    profile: AdminStore.getProfile(),
    open:false}

},
handleProfileChange(Data){
      ProfileActions.ChangeProfile(Data);
    },
componentWillMount(){              // Вызывается один раз, на клиенте и сервере, непосредственно перед началом рендеринга.
     ProfileActions.LoadProfile();
 },
componentDidMount(){          //Вызывается один раз, только на клиенте (не на сервере), сразу же после того, как происходит инициализация рендеринга.
       AdminStore.addChangeListener(this._onChange);
    },
    componentWillUnMount(){  //Вызывается непосредственно перед тем, как компонент демонтируется из DOM.
       AdminStore.removeChangeListener(this._onChange);
    },
    

    _onChange(){
     if(this.refs.myref){   
this.setState({isLoading:AdminStore.isLoading()});
this.setState({profile:AdminStore.getProfile()})}
    },



render(){ 
    return(
        <div>
               <Paper className='Profile' zDepth={3} >
                   <div ref='myref'>
                <ListProfile list={this.state.profile}/>
                </div>
       <DialogComp onProfileChange={this.handleProfileChange}/>
        <div></div>
            </Paper> 
            </div>
    )
}
});

export default Profile