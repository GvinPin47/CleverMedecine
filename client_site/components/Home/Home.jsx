import React from"react"
import Doctor from "../Doctors/Doctors.jsx"
const Home =React.createClass({
render()
{    return(
<div>
   {
    this.props.home.map(ad=>
    <h1 key={ad._id}>{ad.name}{ad.password}</h1>)
   }
</div>
    );
}
});

export default Home;