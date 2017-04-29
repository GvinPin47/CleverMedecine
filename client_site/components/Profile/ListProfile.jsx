import React from 'react'
import CreateReactClass from 'create-react-class'
import{ List,ListItem} from 'material-ui/List'
import Avatar from 'material-ui/Avatar'
import Paper from 'material-ui/Paper'
import './ProfileLes.less'
let lister=[]


const ListProfile=CreateReactClass({


    render(){
    if(this.props.list!=undefined){
    lister=this.props.list

    }

        return(
            <div>
            <Paper className='MainListTag'>
                    <List >
                   <ListItem  primaryText={lister.Firstname} secondaryText='Профиль' leftAvatar={<Avatar src='http://media.cackle.me/a6b9b753d4930d8d680207d455e7a6ff.jpg' />}/>
                   </List>
                   </Paper>
                    <Paper className='List' zDepth={2} >
                <List>
                    <ListItem primaryText={lister.Firstname} secondaryText='Имя'/>
                    <ListItem primaryText={lister.Lastname} secondaryText='Фамилия'/>
                    <ListItem primaryText={lister.Email} secondaryText='Почта'/>
                    <ListItem primaryText={lister.Phone} secondaryText='Телефон'/>
                    <ListItem primaryText={lister.Sex} secondaryText='Пол'/>
                    </List>
                    </Paper>
                    </div>
        )
    }
})
export default ListProfile