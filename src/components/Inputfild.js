import React, { useState } from "react";
import { TextField } from "@mui/material";

function Inputfild() {
  const [data, setData] = useState([{ data1: "", data2: "" }]);

  console.log("deta", data);


  const handlechange = (e, i,) => {
    setData((prestate) => {
  const {name, value} = e.target;

      prestate[i].data1 = e.target.value;

      // prestate[i].data1 = e.target.value;
      // prestate[i].data2 = e.target.value;

      // prestate[i] = e.target.value;
      if (e.target.value !== "") {
        if (prestate[data.length - 1] !== "") {
          prestate.push({ data1: "", data2: "" });
        }
      } else {
        prestate.splice(i, 1);
      }

      return [...prestate];
    });
  };

  return (
    <>
      {data?.map((item, i) => {
        return (
          <div key={i}>
            <TextField
              sx={{ left: "35%", top: "20px" }}
              required
              placeholder="Enter value"
              id="filled-required"
              // label="Required"
              variant="filled"
              value={item.data1}
              onChange={(e) => handlechange(e, i, "data1")}
            />

            <TextField
              sx={{ left: "40%", top: "20px" }}
              required
              id="filled-require"
              placeholder="Enter value"
              // label="Required"
              variant="filled"
              value={item.data2}
              onChange={(e) => handlechange(e, i, "data2")}
            />
            <br />
            <br />
          </div>
        );
      })}
    </>
  );
}

export default Inputfild;
