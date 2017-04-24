import React,{Component} from "react"
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom"
import App from "./components/App.jsx"
import MainPage from "./components/MainPage/MainPage.jsx"
import {browserHistory} from 'react-router-dom'
import Profile from './components/Profile/Profile.jsx'
import MenuComponent from './components/MenuComponent/MenuComponent.jsx'
 const Routes =React.createClass({

    render()
{
return( 

<div>
        <Router>  
            <div>
                <Switch>
                <Route exact path='/'  component={App}></Route>  
                <Route path='/mainPage'  component={MainPage}>
                
                    <Route path ='profile' component={Profile}/>
                    
                    </Route>
                </Switch>            
            </div>
            </Router>,
</div>)
}
})
export default Routes
