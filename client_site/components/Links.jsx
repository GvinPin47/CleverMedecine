import React from"react"
import {Link} from "react-router-dom"

const Links =()=>{

    return(
<nav>
    
   <Link to='/'>Home</Link>
  
       <Link to='/administrators'>Admin</Link>
   <Link to='/doctors'>Doctors</Link>
    
</nav>
    );
};

export default Links;