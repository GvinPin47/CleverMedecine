import React from 'react'
import CreateReactClass from 'create-react-class'
import {TableRow,TableRowColumn,Table,TableBody,TableHeader,TableHeaderColumn} from 'material-ui/Table'
import '../Administrator/Administrator.less'
let adminlister=[]
 let a
const TableRowColumns =CreateReactClass({
   
   
    
    render(){
          if(this.props.list!=undefined){
    adminlister=this.props.list
}

var rows=[];
for (var index = 0; index < 2; index++) {
    rows.push(
            <TableRow key={adminlister[index]._id} >
    <TableRowColumn >{adminlister[index].LpuAdminData.Name}</TableRowColumn>
      <TableRowColumn>{adminlister[index].LpuAdminData.Lastname}</TableRowColumn>
                  <TableRowColumn>{adminlister[index].LpuAdminData.Lpu}</TableRowColumn>
                  </TableRow>           
    )
}
        return(
            <div>
                 <Table className="Table">
            <TableHeader>
             <TableRow>
                 <TableHeaderColumn>Имя</TableHeaderColumn>
                 <TableHeaderColumn>Фамилия</TableHeaderColumn>
                 <TableHeaderColumn>ЛПУ</TableHeaderColumn>
             </TableRow>   
            </TableHeader>
          <TableBody>          
                {rows}        
 </TableBody>     
          </Table>
           </div>
              
        )
        
    }
})
export default TableRowColumns