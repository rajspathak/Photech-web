import React, { useEffect, useState } from "react";
import Navbar from "../component/Nav";
import { Whatsapp, PhoneCall } from "../container/AdditionalTools";
import Carrer1 from "../assests/Carrer1.jpg";
import {
  TextField,
  FormControl,
  Button,
  Select,
  InputLabel,
  MenuItem,
} from "@mui/material";

function validateEmail(email) {
  const regex = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/;
  return regex.test(email);
}

const Career = () => {
  const [careerForm, setCareerForm] = useState({
    name: "",
    email: "",
    phno: "",
    role: "",
    city: "",
    state: "",
    bestProject: "",
    linkedinlink: "",
    resume:""
  });
  const [nameErr, setNameErr] = useState(false);
  const [emailErr, setEmailErr] = useState(false);
  const [phnoErr, setPhnoErr] = useState(false);
  const [cityErr, setCityErr] = useState(false);
  const [stateErr, setStateErr] = useState(false);
  const [roleErr, setRoleErr] = useState(false);
  const [linkedinErr, setLinkedinErr] = useState(false);
  
  const [bestProjectErr, setBestProjectErr] = useState(false);
  const handleSubmit = () => {
    if (
      careerForm.name !== "" &&
      validateEmail(careerForm.email) &&
      careerForm.phno !== "" &&
      careerForm.city !== "" &&
      careerForm.state !== "" &&
      careerForm.role !== "" &&
      careerForm.linkedinlink !== "" &&
      careerForm.bestProject !== ""
    ) {
      console.log(careerForm);
      setNameErr(false);
      setEmailErr(false);
      setPhnoErr(false);
      setCityErr(false);
      setStateErr(false);
      setRoleErr(false);
      
      setLinkedinErr(false);
      setBestProjectErr(false);
    } else {
      careerForm.name === "" ? setNameErr(true) : setNameErr(false);
      validateEmail(careerForm.email) ? setEmailErr(false) : setEmailErr(true);
      careerForm.phno === "" ? setPhnoErr(true) : setPhnoErr(false);
      careerForm.city === "" ? setCityErr(true) : setCityErr(false);
      careerForm.state === "" ? setStateErr(true) : setStateErr(false);
      careerForm.role === "" ? setRoleErr(true) : setRoleErr(false);
      careerForm.linkedinlink === ""
        ? setLinkedinErr(true)
        : setLinkedinErr(false);
      careerForm.bestProject === ""
        ? setBestProjectErr(true)
        : setBestProjectErr(false);
    }
  };
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);
  return (
    <div>
      <PhoneCall />
      <Whatsapp />
      <Navbar />
      <div className="pt-28">
        <div className="h-screen w-screen">
          <img
            src={Carrer1}
            alt="photechTechnology"
            className="h-screen w-screen"
          />
        </div>
        <div className="px-32 py-16 bg-gray-200 max-lg:px-12 max-md:px-6">
          <div className="bg-white p-4">
            <div className="grid grid-cols-3 max-lg:grid-cols-1 gap-8 p-16 max-lg:p-6 rounded-lg ">
              <div>
                <FormControl fullWidth>
                  <TextField
                    value={careerForm.name}
                    onChange={(e) =>
                      setCareerForm({ ...careerForm, name: e.target.value })
                    }
                    id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    type="text"
                    required
                  />
                </FormControl>
                {nameErr && (
                  <p className="text-red-500 text-xs ml-2">Name Error</p>
                )}
              </div>
              <div>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    value={careerForm.email}
                    onChange={(e) =>
                      setCareerForm({ ...careerForm, email: e.target.value })
                    }
                    label="Email"
                    variant="outlined"
                    type="email"
                    required
                  />
                </FormControl>
                {emailErr && (
                  <p className="text-red-500 text-xs ml-2">Email Error</p>
                )}
              </div>
              <div>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Role"
                    required
                    value={careerForm.role}
                    onChange={(e) =>
                      setCareerForm({ ...careerForm, role: e.target.value })
                    }
                  >
                    <MenuItem value="react">React Front Developer</MenuItem>
                    <MenuItem value="Angular">
                      Angular Frontend Developer
                    </MenuItem>
                    <MenuItem value="java">Java Developer</MenuItem>
                    <MenuItem value="node">NodeJS Dedveloper</MenuItem>
                    <MenuItem value="mern">MERN Dedveloper</MenuItem>
                    <MenuItem value="mean">MEAN Dedveloper</MenuItem>
                  </Select>
                </FormControl>
                {roleErr && (
                  <p className="text-red-500 text-xs ml-2">Role Error</p>
                )}
              </div>
              <div>
                <FormControl fullWidth>
                  <TextField
                    value={careerForm.phno}
                    onChange={(e) =>
                      setCareerForm({ ...careerForm, phno: e.target.value })
                    }
                    id="outlined-basic"
                    label="Phone Number"
                    variant="outlined"
                    type="tel"
                   
                    
                  />
                </FormControl>
                {phnoErr && (
                  <p className="text-red-500 text-xs ml-2">
                    Phone number Error
                  </p>
                )}
              </div>
              <div>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    label="City"
                    variant="outlined"
                    value={careerForm.city}
                    onChange={(e) =>
                      setCareerForm({ ...careerForm, city: e.target.value })
                    }
                    type="text"
                    required
                  />
                </FormControl>
                {cityErr && (
                  <p className="text-red-500 text-xs ml-2">City error</p>
                )}
              </div>
              <div>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    label="State"
                    variant="outlined"
                    value={careerForm.state}
                    onChange={(e) =>
                      setCareerForm({ ...careerForm, state: e.target.value })
                    }
                    required
                    type="text"
                  />
                </FormControl>
                {stateErr && (
                  <p className="text-red-500 text-xs ml-2">State error</p>
                )}
              </div>
              <div>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    label="LinkedIn URL"
                    variant="outlined"
                    required
                    type="url"
                    value={careerForm.linkedinlink}
                    onChange={(e) =>
                      setCareerForm({
                        ...careerForm,
                        linkedinlink: e.target.value,
                      })
                    }
                  />
                </FormControl>
                {linkedinErr && (
                  <p className="text-red-500 text-xs ml-2">linkedIn Error</p>
                )}
              </div>
              <div>
                <FormControl fullWidth>
                  <TextField
                    id="outlined-basic"
                    label="Best Project hosted link"
                    variant="outlined"
                    required
                    type="url"
                    value={careerForm.bestProject}
                    onChange={(e) =>
                      setCareerForm({
                        ...careerForm,
                        bestProject: e.target.value,
                      })
                    }
                  />
                </FormControl>
                {bestProjectErr && (
                  <p className="text-red-500 text-xs ml-2">
                    best Project Error
                  </p>
                )}
              </div>
            </div>
            <div>
              <div className="flex item-center justify-around">
                <Button variant="contained" onClick={handleSubmit}>
                  Submit
                </Button>
                <Button variant="contained">Cancel</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
