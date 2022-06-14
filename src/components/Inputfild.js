import React, { useState } from 'react';
import { TextField } from '@mui/material';

function Inputfild() {
  const [data, setData] = useState(['']);


  return (
    <>
      {data.map((item) => {
        <TextField
          sx={{ left: '800px', top: '20px' }}
          required
          id="filled-required"
          label="Required"
          variant="filled"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />;
      })}
    </>
  );
}

export default Inputfild;
