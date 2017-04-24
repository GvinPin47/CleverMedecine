import React from"react"
import MenuComponent from '../MenuComponent/MenuComponent.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import createReactClass from "create-react-class"

    

const MainPage =createReactClass({
render(){
    return(
        
        <MuiThemeProvider>
<MenuComponent/>
</MuiThemeProvider>
             
    );
}
});

export default MainPage;