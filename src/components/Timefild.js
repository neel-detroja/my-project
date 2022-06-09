    import React, { useState } from 'react'
    import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

    function Timefild() {
        const [time, setTime] = useState();

        const hendalSubmit = () => {
            console.log("==>",time);
            if(time >= "12:00" && time <= "17:59" ) {
                document.body.style.backgroundColor = 'yellow';
            }
            else if (time >= "18:00" || time <= "05:59"){
                document.body.style.backgroundColor = 'gray';
            }
            else
            {
                document.body.style.backgroundColor = "red";
            }
        }
    return (
        <>
        <div style={{marginTop:'20px', marginLeft:'850px'}}>
        <TextField
            id="time"
            label="Time "
            type="time"
            defaultValue="00:00"
            onChange={(e) => setTime(e.target.value)}
          
            sx={{ width: 150 }} 
        />

        <Button variant="contained" color="success" onClick={hendalSubmit}>
        submit
        </Button>
        <br></br>
        <br></br>
        <h1>
        <h1>{time}</h1>
        </h1>
        </div>
        </>
    )
    }

    export default Timefild
