import React from 'react';
import {Table} from 'react-bootstrap';



export default function({onEdit, onDelete}){
    const data = JSON.parse(localStorage.getItem('formsData'));
   
    if(data && !data.length) return null;
       

    return (
  <ul>
    <li>
    
    <Table striped bordered hover size="sm">
    <thead>
    <tr>
        <th>Name</th>
        <th>DOB</th>
        <th>Email</th>
        <th>Sex</th>
        <th>Skills</th>
        <th>option</th>
</tr></thead>
{data && data.map((p, index) =>  
<tbody>
<tr>
    <td>{p.name}</td>
    <td>{p.dob}</td>
    <td>{p.email}</td>
    <td>{p.sex}</td>
    <td>{p.skills}</td>
    <td>
      <button type="button" className="btn btn-info" onClick={onEdit(index)} >edit</button>
      <button type="button" className="btn btn-danger" onDelete={onDelete(index)}>delete</button> 
    </td>
     
    </tr></tbody>)}

    </Table>
</li>
  </ul>     
    )

} 
function edit(){
  

}