import React,{Component} from "react"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"

import Administrators from "./Administrators/Administrators.jsx"
import Doctors from "./Doctors/Doctors.jsx"
import Home from "./Home/Home.jsx"
import Links from "./Links.jsx"


class App extends Component{
render(){
return (
    <Router> 
    <div>
     <Links />
      <Route exact path ="/" component={Home}/>
      <Route path ='/administrators'component={Administrators}/>
      <Route path ='/doctors'component={Doctors}/>
    </div>
    </Router>
);
}
}
export default App;