import { Button, Card, CardContent, IconButton, Stack, TextField, Typography } from '@mui/material';
import { red } from '@mui/material/colors';
import React, { useState } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';

function Todo() {
  const [todo, settodo] = useState();
  const [todolist, settodolist] = useState([]);

  console.log('===>todo', todo);

  console.log('===>todolist', todolist);

  const hendalSubmit = (e) => {
    e.preventDefault();

    settodolist([...todolist, { todo, id: todolist.length }]);
    localStorage.setItem('key', JSON.stringify(todolist));
    settodo('');
  };

  const handleDelete = (e) => {
    e.preventDefault();

    console.log('delete');
    const newData = todolist.filter((item) => item.id === e.id);
    settodolist(newData);
  };
  return (
    <>
      <TextField
        variant="outlined"
        sx={{ top: '25px', left: '800px', marginBottom: '50px' }}
        label="Add todos"
        placeholder="Add todos"
        value={todo}
        onChange={(e) => settodo(e.target.value)}
      />

      {/* <TextField
        required
        id="standard-required"
        variant="standard"
      /> */}

      <Button onClick={hendalSubmit} sx={{ top: '35px', left: '830px' }} variant="contained">
        Submit
      </Button>

      <Card
        sx={{ textAlign: 'center', margintop: '50px', width: '500px' }}
        style={{ marginLeft: '720px', justifyContent: 'center' }}
      >
        <CardContent>
          {todolist.map((item, i) => {
            return (
              <Stack key={i}>
                <Typography>
                  {item.todo}
                  {/* <Button
                    variant="contained"
                    sx={{ left: '50px', width: '10px', color: 'error' }}
                    onClick={handleDelete}
                  >
                    Delete
                  </Button> */}
                  <IconButton aria-label="delete" onClick={handleDelete} style={{ left: '40px' }}>
                    <DeleteIcon sx={{ color: red[900] }} />
                  </IconButton>
                  <br />
                  <br />
                </Typography>
              </Stack>
            );
          })}
        </CardContent>
      </Card>
    </>
  );
}

export default Todo;
