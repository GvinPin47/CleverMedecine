import React,{Component} from "react"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"

/*import Administrators from "./Administrators/Administrators.jsx"
import Doctors from "./Doctors/Doctors.jsx"
import Home from "./Home/Home.jsx"
import Links from "./Links.jsx"*/
import Home from "./Home/Home.jsx"

import AdminStore from "../stores/AdminStore.js"
import AdminActions from "../actions/AdminActions.js"

function getStateFromFlux(){
    
    return{
        isLoading: AdminStore.isLoading(),
        adminList: AdminStore.getAdminList()
    };
    
}

const App =React.createClass({
    getInitialState(){
    return getStateFromFlux();
 },
  componentWillMount(){              // Вызывается один раз, на клиенте и сервере, непосредственно перед началом рендеринга.
     AdminActions.loadAdmin();
 },
  componentDidMount(){          //Вызывается один раз, только на клиенте (не на сервере), сразу же после того, как происходит инициализация рендеринга.
       AdminStore.addChangeListener(this._onChange);
    },
    componentWillUnMount(){   //Вызывается непосредственно перед тем, как компонент демонтируется из DOM.
       AdminStore.removeChangeListener(this._onChange);
       
    },
    
render(){
return (
   <div>
    <Home home={this.state.adminList}></Home>
        </div>
);
},
_onChange(){

this.setState(getStateFromFlux());
    }
});
export default App;