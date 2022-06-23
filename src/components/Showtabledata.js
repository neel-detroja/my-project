import {
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../Fiarbase/fiarbase";

const Showtabledata = () => {
  const [userData, setUserData] = useState([]);
  console.log("--empdata", userData);

  useEffect(() => {
    let dataref = collection(db, "Data");
    let q = query(dataref, orderBy("createAt", "asc"));

    onSnapshot(q, (querySnapshot) => {
      let Data = [];
      querySnapshot.forEach((doc) => {
        Data.push(doc.data());
        console.log("--data", Data);
    });
    setUserData(Data);
    });
  }, []);

  return (
    <div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <Typography
          sx={{ fontSize: "30px", textAlign: "center", fontWeight: "bold" }}
        >
          User Data
        </Typography>

        <TableContainer sx={{ maxHeight: 500, marginTop: "50px" }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Id
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Name
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Email
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Date of birth
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Age
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Technology
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Phone no
                </TableCell>
                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Gender
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Hobbies
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Address
                </TableCell>

                <TableCell
                  sx={{
                    fontSize: "20px",
                    fontWeight: "bold",
                    textAlign: "center",
                  }}
                >
                  Account type
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
                {console.log('userData', userData)}
              {userData.map((row, i) => {
                const {
                  fnm,
                  lnm,
                  email,
                  dob,
                  techno,
                  phone,
                  gender,
                  hobby,
                  add,
                  acc,
                  age
                } = row;
                return (
                  <TableRow key={i}>
                    <TableCell sx={{ textAlign: "center" }}>{i + 1}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {fnm + " " + lnm}
                    </TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{email}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{dob}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{age}</TableCell>

                    <TableCell sx={{ textAlign: "center" }}>{techno}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{phone}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{gender}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{hobby.map((item)=> (
                        <Stack>
                        <TableRow>{item}</TableRow>
                        </Stack>
              ))}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>{add}</TableCell>
                    <TableCell sx={{ textAlign: "center" }}>
                      {acc === true ? "private" : "public"}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Showtabledata;
