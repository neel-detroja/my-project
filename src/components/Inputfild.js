import React, { useState } from 'react';
import { TextField } from '@mui/material';

function Inputfild() {
  const [data, setData] = useState(['']);

  const handlechange = (e, i) => {
    e.preventDefult();

    setData((pre)=> {
      pre[i] = e.target.value;
      if(e.target.value !== "") {
        if(pre[data.length - 1] !== "") {
          pre.push("");
        }
      }
      else {
        pre.pop("")
      }
    })


  };

  return (
    <>
      {data?.map((item, i) => {
        <TextField
          sx={{ left: '800px', top: '20px' }}
          required
          id="filled-required"
          label="Required"
          variant="filled"
          value={data}
          onChange={(e) => handlechange(e, i)}

        />
      })}

      
    </>
  );
}

export default Inputfild;
