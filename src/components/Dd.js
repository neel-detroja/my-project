import React, { useState } from 'react'
import { Card, Table } from 'react-bootstrap'
import { Button } from 'react-bootstrap'
import { callGetMethod } from './Api'
import './DataTable.css'
function Dd() {
const [data1, setData1] = useState([])

const [count, setCount] = useState();

const handleClick = async () => {
const response = await callGetMethod(count)
setData1(response)
// setNumber(count)

}

return (
// console.log('nnnnnnnnnnnnnnnnn',data1.length),
<>
<input type='number' name='count' value={count} onChange={(e) => setCount(e.target.value)} style={{marginLeft: '64px'}}></input>
<button type='button' onClick={handleClick}>Submit</button><br></br><br></br>
<Card className="dtcard">
<Card.Body>
<Card.Title style={{fontSize: '25px'}}>Data Table</Card.Title>
<Card.Text>
<Table className=''>
<thead>
<tr>
<th>id</th>
<th>category Name</th>
<th>category Description</th>
<th>Action</th>
</tr>
</thead>
<tbody>

{data1.length > 0 ?
data1.map((row) => {
return(
<tr key={row.name}>
<td>{row.name.title}</td>
<td>{row.name.first}</td>
<td>{row.name.last}</td>
<td>
<div>
<Button style={{marginRight:'5px'}} type='submit'>Edit</Button>
<Button style={{marginRight:'5px'}} type='submit'>Delete</Button>
</div>
</td>
</tr>
)
}) : null}

</tbody>
</Table>
</Card.Text>
</Card.Body>
</Card>
</>
)
}




export default Dd