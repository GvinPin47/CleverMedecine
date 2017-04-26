import React,{Component} from"react"

import {Link,match,Redirect} from "react-router-dom"
import createReactClass from "create-react-class"
import RaisedButton from 'material-ui/RaisedButton'
import TextField from "material-ui/TextField"
import Paper from 'material-ui/Paper'
import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin();

import '../Home/Home.less'

 const Home =createReactClass({
getInitialState(){
return{
name:'',
password:''
}
},
componentWillUnmount(event){

},
handleNameChange(event){
this.setState({name:event.target.value})
},
handlePasswordChange(event){
this.setState({password:event.target.value})
},
handleUserAdd(event){
    const User={
        name:this.state.name,
        password:this.state.password
    };
    
    this.props.userAuthH(User);
    this.setState({name:'',password:''})
    
},

render()
{  
  
      return(
         
<Paper className='Text'>
    
  <TextField className='TextField'  id='name'type='text' placeholder='Введите имя' value={this.state.value} onChange={this.handleNameChange}></TextField>
   <TextField className='TextField' id='password' type='text' placeholder='Введите пароль' value={this.state.value} onChange={this.handlePasswordChange}></TextField>
   <RaisedButton className='Button' backgroundColor='#FFA726' label='Ввод' onTouchTap={this.handleUserAdd}></RaisedButton>
</Paper>
   
    );
}
});
export default Home
