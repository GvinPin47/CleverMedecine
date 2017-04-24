import React from"react"
import MenuComponent from '../MenuComponent/MenuComponent.jsx'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'


    

const MainPage =()=>{

    return(
        
        <MuiThemeProvider>
<MenuComponent/>

</MuiThemeProvider>
            
    );
};

export default MainPage;