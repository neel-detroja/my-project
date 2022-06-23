import React, { useState } from "react";
import { TextField } from "@mui/material";

function Inputfild() {
  const [data, setData] = useState([{ data1: "", data2: "" }]);

  console.log("deta", data);

  const handleChange = (e, i, type) => {
    if (type === "data1") {
      setData((preState) => {
        preState[i].data1 = e.target.value;
        return [...preState];
      });
    }
    if (type === "data2") {
      setData((preState) => {

        preState[i].data2 = e.target.value;

        if (preState[i].data2 !== "") {

          console.log("==>length",preState[i].data2.length);

          if (preState[data.length - 1] !== "" && preState[i].data2.length  === 1 ) {

          console.log("==>length2",preState[i].data2.length);

            preState.push({ data1: "", data2: "" });
          }
        } else {
          // preState.splice(i, 1);
          preState.pop(i, 1)
        } 
        // if (e.target.value !== "") {
        //     if (preState[data.length - 1] !== "" ) {
        //       preState.push({ data1: "", data2: "" });
        //     }
        //   } else {
        //     preState.splice(i, 1);
        //   }

        return [...preState];
      });
    }
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
              //   name={data1}
              variant="filled"
              value={item.data1}
              onChange={(e) => handleChange(e, i, "data1")}
            />

            <TextField
              sx={{ left: "40%", top: "20px" }}
              required
              id="filled-require"
              placeholder="Enter value"
              // label="Required"
              //   name={data2}
              variant="filled"
              value={item.data2}
              onChange={(e) => handleChange(e, i, "data2")}
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
