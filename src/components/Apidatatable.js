import {
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography
} from '@mui/material';
import React, { useEffect, useState } from 'react';
import Dailog from './Dailog';
import DeleteIcon from '@mui/icons-material/Delete';
function Apidatatable() {
  const [tableData, setTableData] = useState([]);

  console.log('==>tabledata', tableData);

  const handleDelete = (deleteThis) => {
    console.log('delete');
    let newData = this.state.data.filter((searchItem) => searchItem.index !== deleteThis.index);
    this.setState({
      data: newData
    });
  };

  // const data = [
  //     {id:1, name:"Neel", lastname:"Patel", number:9512373722, gender:"male"},
  //     {id:2, name:"bhaumik", lastname:"parmar", number:9525847535, gender:"male"},
  //     {id:3, name:"john", lastname:"deo", number:9585452565, gender:"male"},
  //     {id:4, name:"herry", lastname:"lio", number:8545955355, gender:"male"},
  //     {id:5, name:"nioe", lastname:"dejengo", number:7529513684, gender:"female"},
  //     {id:6, name:"vella", lastname:"hoyp", number:9258963578, gender:"male"},

  // ]

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((data) => data.json())
      .then((data) => setTableData(data));
  }, []);

  return (
    <div>
      <Paper sx={{ width: '100%', overflow: 'hidden' }}>
        <Typography sx={{ fontSize: '30px', textAlign: 'center', fontWeight: 'bold' }}>User Data</Typography>

        <TableContainer sx={{ maxHeight: 500, marginTop: '50px' }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell sx={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>Id</TableCell>
                <TableCell sx={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>Title</TableCell>
                <TableCell sx={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>Body</TableCell>
                {/* <TableCell></TableCell> */}

                {/* <TableCell sx={{fontSize:"20px", fontWeight:"bold",textAlign:'center'}}>Number</TableCell>
            <TableCell sx={{fontSize:"20px", fontWeight:"bold",textAlign:'center'}}>Gender</TableCell> */}
                {/* 
            <TableCell ></TableCell> */}
                <TableCell sx={{ fontSize: '20px', fontWeight: 'bold', textAlign: 'center' }}>Action</TableCell>
                {/* <TableCell ></TableCell> */}
              </TableRow>
            </TableHead>
            <TableBody>
              {tableData.map((item, i) => {
                return (
                  <>
                  <TableRow key={i}>
                    <TableCell sx={{ textAlign: 'center' }}>{item.id}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{item.title}</TableCell>
                    <TableCell sx={{ textAlign: 'center' }}>{item.body}</TableCell>
                    {/* <TableCell sx={{textAlign:'center'}}>{item.number}</TableCell>
                   <TableCell sx={{textAlign:'center'}}>{item.gender}</TableCell> */}
                    <TableCell>
                      <Stack direction="row" sx={{ justifyContent: 'center' }}>
                        <Dailog />

                        {/* <Button
                  sx={{marginLeft:'15px'}}
                    variant="contained"
                    color="secondary"
                    onClick={handleDelete}
                   >
                    Delete
                </Button> */}

                        <IconButton aria-label="delete" onClick={handleDelete}>
                          <DeleteIcon color="error" />
                        </IconButton>
                      </Stack>
                    </TableCell>
                    {/* <TableCell></TableCell> */}
                  </TableRow>
                  </>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default Apidatatable;
