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

let a=[]
let b;
const Profile=createReactClass({

getInitialState(){
return{
     isLoading: AdminStore.isLoading(),
    profile: AdminStore.getProfile(),
    open:false}

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

handleOpen(){
     
this.setState({open:true})
},
handleClose(){
this.setState({open:false})
},
handlePrimary(){
 if(this.state.profile!=undefined){return this.state.profile.Firstname}},

render(){
    const actions =[
<FlatButton
    label='Выйти'
    primary={true}
    onTouchTap={this.handleClose}
/>,
<FlatButton
    label='Изменить'
    primary={true}
    disabled={false}
    onTouchTap={this.handleClose}
/>,
    ]
    
    return(
        <div>
               <Paper className='Profile' zDepth={3} >
                   <div ref='myref'>
                <ListProfile list={this.state.profile}/>
                </div>
        <RaisedButton className='Rbutton' label='Редактировать'  backgroundColor='#FFA726' onTouchTap={this.handleOpen} ></RaisedButton>
        <Dialog 
                title="Редактирование Данных"
                actions={actions}
                modal={true}
                open={this.state.open}
        >
        <div className='Dialog'>
        <TextField id='1' className='TextField' defaultValue='Имя будет здесь'/>
        <TextField id='2' defaultValue='Фамилия будет здесь'/>
        <TextField id='3' className="TextField" defaultValue='Почта будет здесь'/>
        <TextField id='4' defaultValue='Телефон будет здесь'/>
        </div>
        </Dialog>
        <div></div>
            </Paper> 
            </div>
    )
}
});

export default Profile