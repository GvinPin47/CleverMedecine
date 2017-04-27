import React,{Component} from "react"
import {BrowserRouter as Router,Route,Link,browserHistory,Redirect,match} from "react-router-dom"

import Home from "./Home/Home.jsx"
import AdminStore from "../stores/AdminStore.js"
import AdminActions from "../actions/AdminActions.js"
import createReactClass from "create-react-class"

import getMuiTheme from'material-ui/styles/getMuiTheme'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'



function getStateFromFlux(){
    
    return{
        isLoading: AdminStore.isLoading(),
        user: AdminStore.getUser(),
    };
    
}
var x
 var token
const App =createReactClass({
    
    getInitialState(){
    return getStateFromFlux();
 },
  componentWillMount(){              // Вызывается один раз, на клиенте и сервере, непосредственно перед началом рендеринга.
},
 

  componentDidMount(){ 
              //Вызывается один раз, только на клиенте (не на сервере), сразу же после того, как происходит инициализация рендеринга.
       AdminStore.addChangeListener(this._onChange);
    },
    componentWillUnMount(){
       //Вызывается непосредственно перед тем, как компонент демонтируется из DOM.
       AdminStore.removeChangeListener(this._onChange);
    },
    
    userAuthHandle(data){
      localStorage.setItem('token', this.state.user.message) 
      AdminActions.AuthUser(data);
       
    },
    authcheck(){
        
        if(localStorage.getItem('token')!=undefined){console.log('login')
         return token=(
             <Redirect to='/mainPage' push> </Redirect>
             )}else{console.log('unlogin'); return localStorage.removeItem('token')} 
    },
    
render(){
   
return (
   <div>
       <MuiThemeProvider >
    <Home userAuthH={this.userAuthHandle}></Home>
    </MuiThemeProvider>
       {this.authcheck()}
            <div ref='myref'>
       {this.state.user.message=undefined}</div>
                  </div>
);
},
_onChange(){

if(this.refs.myref)
this.setState(getStateFromFlux());
    }
});
export default App