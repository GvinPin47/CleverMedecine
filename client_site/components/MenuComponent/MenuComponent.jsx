import React from 'react'
import createReactClass from "create-react-class"
import {Link,Redirect} from "react-router-dom"
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
import FlatButton from "material-ui/FlatButton"
import Drawer from 'material-ui/Drawer'

import Administrator from '../Administrator/Administrator.jsx'
import Profile from "../Profile/Profile.jsx"
import "../MenuComponent/MenuComponent.less"

const MenuComponent=createReactClass({
getInitialState(){
    return{
        showProfile:false,
    exit:false,
showAdmin:false,
Menu:'Menu',
openDrawer:false,
}
        this.toggleProfile=this.toggleProfile.bind(this)
},

toggleProfile(){
if(this.state.showProfile === true) { this.setState({showProfile: false});this.setState({openDrawer:false}) }
else {this.setState({showProfile: true}); this.setState({showAdmin:false});this.setState({openDrawer:false})} 
},
handleExitOk(){
 if(this.state.exit === true) { this.setState({exit: false}); }
else this.setState({exit: true}); 
},

localstorage(){
    return (localStorage.removeItem('tokenlog'),<Redirect to='/' push/>)
},

toggleAdmin(){
if(this.state.showAdmin === true) { this.setState({showAdmin: false});this.setState({openDrawer:false}) }
else {this.setState({showAdmin: true}); this.setState({showProfile:false});this.setState({openDrawer:false})}
},
handleTitle(){
    if(this.state.Menu=="Menu"){this.setState({Menu:'MenuChange'})}else this.setState({Menu:'Menu'})
},
handleDrawer(){
     this.setState({openDrawer:!this.state.openDrawer})
},


render(){
    return(
    <div>
      
   <Appbar className='Appbar' title='CleverMedecine' onLeftIconButtonTouchTap={this.handleDrawer} 
    iconElementRight={<FlatButton label='Выйти' onTouchTap={this.handleExitOk}
    />} style={{width:'1366px'}} >
</Appbar>

<Drawer  open={this.state.openDrawer} containerStyle={{height:'100%',top:64}}  >
    <MenuItem primaryText='Профиль' leftIcon={<Person/>} onClick={this.toggleProfile}></MenuItem>
    <Divider/>
    <MenuItem primaryText='Администраторы' leftIcon={<RemoveRedEye/>} onClick={this.toggleAdmin}/>
    <MenuItem primaryText='Врачи' leftIcon={<Doctor/>}/>
    <MenuItem primaryText='Список Пациентов' leftIcon={<People/>}/>
    <Divider/>
    <MenuItem primaryText='Управление ЛПУ'leftIcon={<LPU/>}/>
    <Divider/>
    <MenuItem primaryText='Препараты' leftIcon={<Pills/>}/>
    <MenuItem primaryText='Диагнозы' leftIcon={<Diognis/>}/>
</Drawer>
<div>
    {this.state.showProfile ? <Profile /> : undefined}
</div>
<div>
    {this.state.exit? this.localstorage() :undefined}
</div>
<div>
    {this.state.showAdmin? <Administrator/> :undefined}
    </div>
    </div>)
}
})

export default MenuComponent