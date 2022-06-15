import React, { useState } from "react";
import { TextField } from "@mui/material";

function Inputfild() {
  const [data, setData] = useState([""]);

  console.log("deta", data);

  const handlechange = (e, i) => {
    setData((pre) => {

      pre[i] = e.target.value;
      if (e.target.value !== "") {
        if (pre[data.length - 1] !== "") {
          pre.push("");
        }
      } else {
        pre.splice(i, 1);
      }
      return [...pre];
    });
  };

  return (
    <>
      {data?.map((item, i) => {
        return (
          <>
            <div key={i}>
            <TextField
              sx={{ left: "45%", top: "20px" }}
              required
              id="filled-required"
              label="Required"
              variant="filled"
              value={item}
              onChange={(e) => handlechange(e, i)}
            />
            <br />
            <br />
            </div>
          </>
        );
      })}
    </>
  );
}

export default Inputfild;
