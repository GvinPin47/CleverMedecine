import React from 'react'
import CreateReactClass from 'create-react-class'
import Dialog from 'material-ui/Dialog'
import TextField from'material-ui/TextField'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import "./Dialog.less"

const DialogComp=CreateReactClass({
    getInitialState(){
        return {
            Firstname:'',
            Lastname:'',
            Email:'',
            Phone:'',
            open:false,
        errorText:null}
    },

handleFirstnameChange(event){this.setState({Firstname:event.target.value});},

handleLastnameChange(event){this.setState({Lastname:event.target.value});},
handleEmailChange(event){this.setState({Email:event.target.value});},
handlePhoneChange(event){this.setState({Phone:event.target.value});},
handleProfileChange(event){ 

    if(this.state.Firstname==''||this.state.Lastname==''||this.state.Email==''||this.state.Phone==''){
    return this.setState({errorText:'Введите данные'})
}

  this.setState({errorText:null})
    const ProfileChange={
Firstname:this.state.Firstname,
Lastname:this.state.Lastname,
Email:this.state.Email,
Phone:this.state.Phone,
    };
    this.props.onProfileChange(ProfileChange)
    this.setState({Firstname:'',Lastname:'',Email:'',Phone:''})
    this.setState({open:false})
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
    onTouchTap={this.handleProfileChange}
/>,
    ]
        return(
            <div>
             <RaisedButton className='Rbutton' label='Редактировать'  backgroundColor='#FFA726' onTouchTap={this.handleOpen} ></RaisedButton>
        <div>
        <Dialog 
                title="Редактирование Данных"
                actions={actions}
                modal={true}
                open={this.state.open}
        >
        <div className='Dialog'>
        <TextField id='1' className='TextField' hintText='Имя' floatingLabelText='Введите Имя' errorText={this.state.errorText} onChange={this.handleFirstnameChange}/>
        <TextField id='2' hintText='Фамилия' floatingLabelText='Введите Фамилию' errorText={this.state.errorText} onChange={this.handleLastnameChange}/>
        <TextField id='3' className="TextField" hintText='Почта' floatingLabelText='Введите Почту' errorText={this.state.errorText} onChange={this.handleEmailChange}/>
        <TextField id='4' hintText='Телефон' type='number' floatingLabelText='Введите Номер телефона' errorText={this.state.errorText} onChange={this.handlePhoneChange}/>
        </div>
        </Dialog>
        </div>
        </div>
        )
    }
})

export default DialogComp