import React from 'react'
import createReactClass from "create-react-class"
import {Link} from "react-router-dom"
import Appbar from 'material-ui/Appbar'
import Paper from 'material-ui/Paper'
import Menu from "material-ui/Menu"
import MenuItem from'material-ui/MenuItem'
import Divider from "material-ui/Divider"
import RemoveRedEye from 'material-ui/svg-icons/image/remove-red-eye'
import Person from "material-ui/svg-icons/social/person"
import People from "material-ui/svg-icons/social/people"
import LPU from "material-ui/svg-icons/places/business-center"
import Doctor from "material-ui/svg-icons/action/favorite"
import Pills from "material-ui/svg-icons/av/library-books"
import Diognis from "material-ui/svg-icons/av/shuffle"



import Profile from "../Profile/Profile.jsx"
import "../MenuComponent/MenuComponent.less"

const MenuComponent=createReactClass({
getInitialState(){

    return{
        showProfile:false}
        this.toggleProfile=this.toggleProfile.bind(this)
},

toggleProfile(){
if(this.state.showProfile === true) { this.setState({showProfile: false}); }
else this.setState({showProfile: true}); 
},

render(){
    return(
    <div>
 <Appbar className='Appbar' title='CleverMedecine'></Appbar>
   <Paper className='Menu'>
<Menu>
    <MenuItem primaryText='Профиль' leftIcon={<Person/>} onClick={this.toggleProfile}></MenuItem>
   
    <Divider/>
    <MenuItem primaryText='Администраторы' leftIcon={<RemoveRedEye/>}/>
    <MenuItem primaryText='Врачи' leftIcon={<Doctor/>}/>
    <MenuItem primaryText='Список Пациентов' leftIcon={<People/>}/>
    <Divider/>
    <MenuItem primaryText='Управление ЛПУ'leftIcon={<LPU/>}/>
    <Divider/>
    <MenuItem primaryText='Препараты' leftIcon={<Pills/>}/>
    <MenuItem primaryText='Диагнозы' leftIcon={<Diognis/>}/>
</Menu>
</Paper>
<div>
    {this.state.showProfile ? <Profile /> : undefined}
</div>
    </div>)
}
})

export default MenuComponent