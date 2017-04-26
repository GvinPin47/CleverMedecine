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

const Profile=createReactClass({

getInitialState(){
return{
    open:false
}
},

handleOpen(){
this.setState({open:true})
},
handleClose(){
this.setState({open:false})
},
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
                   <Paper className='MainListTag'>
               <List >
                   <ListItem  primaryText='Ivan' secondaryText='Профиль' leftAvatar={<Avatar src='http://media.cackle.me/a6b9b753d4930d8d680207d455e7a6ff.jpg' />}/>
                   </List>
                   </Paper>
                    <Paper className='List' zDepth={1} >
                <List>
                    <ListItem primaryText='Имя будет здесь'/>
                    <ListItem primaryText='Фамилия будет здесь'/>
                    <ListItem primaryText='Почта будет здесь'/>
                    <ListItem primaryText='Телефон будет здесь'/>
                    <ListItem primaryText='Пол будет здесь'/>
                    </List>
                </Paper>
<RaisedButton className='Rbutton' label='Редактировать'  backgroundColor='#FFA726' onTouchTap={this.handleOpen} ></RaisedButton>
<Dialog 
 title="Редактирование Данных"
          actions={actions}
          modal={true}
          open={this.state.open}
>
<div className='Dialog'>
 <TextField className='TextField' defaultValue='Имя будет здесь'/>
 <TextField defaultValue='Фамилия будет здесь'/>
 <TextField className="TextField" defaultValue='Почта будет здесь'/>
 <TextField defaultValue='Телефон будет здесь'/>
 </div>
 </Dialog>
            </Paper> 
            </div>
    )
}
});

export default Profile