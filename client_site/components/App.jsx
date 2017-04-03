import React,{Component} from "react"
import {BrowserRouter as Router,Route,Link} from "react-router-dom"

import About from "./About.jsx"

class App extends Component{
render(){
return (
    <Router>
        
 <div>
     <Link to ='/about'>About</Link>
      <Route path ="/" component={About}/>
      <Route path ='/about'component={About}/>
</div>
    </Router>
);
}
}
export default App;