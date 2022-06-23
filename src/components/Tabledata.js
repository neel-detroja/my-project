import {
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  NativeSelect,
  Radio,
  RadioGroup,
  Switch,
  TextField,
} from "@mui/material";
import { addDoc, collection, Timestamp } from "firebase/firestore";
import React, { useState } from "react";
import {db} from "../Fiarbase/fiarbase"

function Tabledata() {
  const [fnm, setFnm] = useState("");
  const [lnm, setLnm] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("2000-01-01");
  const [techno, setTechno] = useState("");
  const [phone, setPhone] = useState("");
  const [gender, setGender] = useState("");
  const [hobby, setHobby] = useState([]);
  const [add, setAdd] = useState("");
  const [acc, setAcc] = useState(false);


  

  const handleSubmit = async () => {

    const Today = new Date(),
    b = new Date(dob),
    diffrence = Today.getTime() - b.getTime(),
    age = Math.floor(diffrence / 31556736000);
  
  

    await addDoc(collection(db, "Data"), {
      createAt: Timestamp.fromDate(new Date()),
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
    });
   
     
  };

  return (
    <>
      <form
        style={{
          height: "600px",
          width: "500px",
          alignItems: "center",
          marginTop: 50,
          marginLeft: "35%",
          padding: "10px",
        }}
      >
        <TextField
          name="firstName"
          required
          id="firstName"
          label="First Name"
          autoFocus
          variant="standard"
          sx={{ margin: "10px" }}
          value={fnm}
          onChange={(e) => setFnm(e.target.value)}
        />

        <TextField
          name="lastName"
          required
          id="lastName"
          label="Last Name"
          autoFocus
          variant="standard"
          sx={{ margin: "10px" }}
          value={lnm}
          onChange={(e) => setLnm(e.target.value)}
        />

        <TextField
          name="email"
          required
          id="email"
          label="Email"
          autoFocus
          variant="standard"
          sx={{ margin: "10px", width: "435px" }}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <TextField
          id="date"
          label="D.O.B"
          type="date"
          variant="standard"
          defaultValue="2022-06-22"
          sx={{ width: 200, margin: "15px" }}
          value={dob}
          onChange={(e) => setDob(e.target.value)}
        />

        <FormControl style={{ margin: "20px", width: "190px" }}>
          <InputLabel variant="standard" htmlFor="uncontrolled-native">
            Technology
          </InputLabel>
          <NativeSelect
            value={techno}
            onChange={(e) => setTechno(e.target.value)}
          >
            <option></option>

            <option>HTML</option>
            <option>JavaScript</option>
            <option>React Js</option>
          </NativeSelect>
        </FormControl>

        <TextField
          name="Phone No"
          required
          id="Phone"
          label="Phone No"
          fullWidth
          autoFocus
          variant="standard"
          sx={{ margin: "10px", width: "435px", top: "-15px" }}
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <FormControl
          style={{
            margin: "15px",
            float: "left",
            width: "230px",
            marginLeft: "20px",
          }}
        >
          <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
          <RadioGroup
            value={gender}
            onChange={(e) => setGender(e.target.value)}
          >
            <FormControlLabel value="male" control={<Radio />} label="Male" />

            <FormControlLabel
              value="female"
              control={<Radio />}
              label="Female"
            />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>

        <FormGroup style={{ margin: "15px" }}>
          <FormLabel id="demo-radio-buttons-group-label">Hobbies</FormLabel>

          <FormControlLabel
            control={
              <Checkbox
                value={"Reading"}
                onChange={(e) => setHobby([...hobby, e.target.value])}
              />
            }
            label="Reding"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={"Playing"}
                onChange={(e) => setHobby([...hobby, e.target.value])}
              />
            }
            label="Playing"
          />
          <FormControlLabel
            control={
              <Checkbox
                value={"Singing"}
                onChange={(e) => setHobby([...hobby, e.target.value])}
              />
            }
            label="Singing"
          />
        </FormGroup>

        <TextField
          style={{ width: "443px" }}
          id="outlined-multiline-static"
          label="Address"
          multiline
          variant="standard"
          rows={2}
          value={add}
          onChange={(e) => setAdd(e.target.value)}
        />

        <FormControlLabel
          style={{ marginLeft: "340px" }}
          control={
            <Switch value={acc} onChange={(e) => setAcc((pre) => !pre)} />
          }
          label={acc === false ? "Public" : "private"}
        />
        <Button variant="contained" color="success" onClick={handleSubmit}>
          Submit
        </Button>
      </form>
    </>
  );
}

export default Tabledata;
