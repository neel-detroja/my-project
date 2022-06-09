import { Button, Dialog, DialogActions, DialogContent, DialogTitle, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';
import React, { useState } from 'react'

function Dailog(item) {
    const [open, setOpen] = React.useState(false);

    const [id, setId] = useState();
    const [name, setName] = useState();
    const [lastname, setLastname] = useState();
    const [numbar, setNumber] = useState();
    const [gender, setGender] = useState();

    // console.log("===>",id);
    // console.log("=>",name);
    // console.log("=>",lastname);
    // console.log("=>",numbar);
    // console.log("=>",gender);


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <div>
       <Button variant="contained" onClick={handleClickOpen}>
        Update
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle sx={{textAlign:'center',fontWeight:'bold'}}>Update user data</DialogTitle>
        <DialogContent>
       
        <TextField
            autoFocus
            margin="dense"
            id="id"
            label="id"
            type="numbar"
            fullWidth
            variant="standard"
            onChange={(e) => setId(e.target.value)}

          />

        <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            fullWidth
            variant="standard"
            onChange={(e) => setName(e.target.value)}
          />

        <TextField
            autoFocus
            margin="dense"
            id="lastname"
            label="Lastname"
            fullWidth
            variant="standard"
            onChange={(e) => setLastname(e.target.value)}
          />
        <TextField
            autoFocus
            margin="dense"
            id="number"
            label="Number"
            fullWidth
            variant="standard"
            value={item.id}
            onChange={(e) => setNumber(e.target.value)}
          />
          
         <FormLabel id="demo-radio-buttons-group-label" >Gender</FormLabel>
            <RadioGroup  
                aria-labelledby="demo-radio-buttons-group-label"
                name="radio-buttons-group"
                onChange={(e) => setGender(e.target.value)}
            >
                    <FormControlLabel value="male" control={<Radio />} label="Male" />

                <FormControlLabel value="female" control={<Radio />} label="Female" />
             </RadioGroup>
  <hr></hr>

        </DialogContent>
        <DialogActions>
            
         <Button variant="contained" color="secondary" onClick={handleClose}>Cancle</Button>

          <Button color="success" variant="contained" onClick={handleClose} >Update</Button>
        </DialogActions>
      </Dialog>
    </div>
  )
}

export default Dailog
