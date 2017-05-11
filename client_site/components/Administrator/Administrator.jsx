import React from 'react'
import CreateReactClass from 'create-react-class'
import '../Administrator/Administrator.less'
import Paper from "material-ui/Paper"
import {Table,TableBody,TableHeader,TableHeaderColumn,TableRow,TableRowColumn,TableFooter} from "material-ui/Table"
import RaisedButton from"material-ui/RaisedButton"
import TextField from "material-ui/TextField"
import SelectField from 'material-ui/SelectField'
import MenuItem from 'material-ui/MenuItem'
import FloatingActionButton from 'material-ui/FloatingActionButton'
import ContentAdd from 'material-ui/svg-icons/content/add';

import ListAdminAction from "../../actions/ListAdminAction.js"
import AdminStore from "../../stores/AdminStore.js"
import TableRowColumns from './TableRowColums.jsx'

const Administartor=CreateReactClass({

    getInitialState(){

        return{
            isLoading: AdminStore.isLoading(),
            listadmin: AdminStore.getLpuAdminData(),
            rowTable:false,
            value:1
        }
    },

componentWillMount(){              // Вызывается один раз, на клиенте и сервере, непосредственно перед началом рендеринга.
     ListAdminAction.LoadAdminList();
 },
 componentDidMount(){          //Вызывается один раз, только на клиенте (не на сервере), сразу же после того, как происходит инициализация рендеринга.
       AdminStore.addChangeListener(this._onChange);
    },
    componentWillUnMount(){  //Вызывается непосредственно перед тем, как компонент демонтируется из DOM.
       AdminStore.removeChangeListener(this._onChange);
    },
    
 _onChange(){
     if(this.refs.myref){   
this.setState({isLoading:AdminStore.isLoading()});
this.setState({listadmin:AdminStore.getLpuAdminData()})
if(this.state.listadmin==undefined){ this.setState({rowTable:false})}else this.setState({rowTable:true})}
    },    
    handleChange(event,index,change){
         this.setState({value:change})
    },
    render(){
            

        return(
            <div ref='myref'>
        <Paper className='Main' zDepth={3}> 
           
                <SelectField className="SelectField"
          floatingLabelText="ЛПУ"
          value={this.state.value}
          onChange={this.handleChange}>
           <MenuItem value={1} primaryText='Межвуз'/>
           <MenuItem value={2} primaryText='3 гор больница'/>
           <MenuItem value={3} primaryText='Нии Кардиологии'/>
          </SelectField>
           <div>
          <TextField className="TextField" hintText="Имя" floatingLabelText='Введите Имя' />
          <TextField hintText="Фамилия" floatingLabelText='Введите Фамилию' />
          <RaisedButton className='Button' label='Поиск' backgroundColor='#FFA726'/>
          </div>
           
          
         
              <div ref='myref'>
            {this.state.rowTable?<TableRowColumns list={this.state.listadmin}/>:null}
            </div>
         
          <FloatingActionButton className='FloatingButton' >
              <ContentAdd/>
          </FloatingActionButton>
        </Paper>
        </div>
        
        )
    }
})

export default Administartor