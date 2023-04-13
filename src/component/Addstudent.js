import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import Base from "../Base/Base";


const AddStudents =({student,setStudent}) =>{

  const history=useHistory()

 const[id,setId]=useState("")
const[name,setName]=useState("")
const[school,setSchool]=useState("")
const[gender,setGender]=useState("")
const[experience,setExperience]=useState("")



const addNewStudent=()=>{
    const newStudent={
      id,
      name,
      school,
      gender,
      yearsOfExperience:experience
    }
  setStudent([...student,newStudent])
  setId("")
  setName("")
  setSchool("")
  setGender("")
  setExperience("")
  history.push("/students")
  }
    return(
        <Base
        title="Add the Student"
        desrciption="you can a student data here"
        
        >
            <div className='input'>

<TextField
 fullWidth label="Enter the Id" 
 onChange={(event)=>setId(event.target.value)}
 value={id}
 id="fullWidth" />

<TextField 
fullWidth label="Enter the Name"
onChange={(event)=>setName(event.target.value)}
 value={name}
id="fullWidth" />

<TextField
fullWidth label="Enter the School"
onChange={(event)=>setSchool(event.target.value)}
 value={school}
 id="fullWidth" />

<TextField 
fullWidth label="Enter the Gender"
onChange={(event)=>setGender(event.target.value)}
 value={gender}
id="fullWidth" />

<TextField 
fullWidth label="Enter the Experience"
onChange={(event)=>setExperience(event.target.value)}
 value={experience}
id="fullWidth" />



<Button 
variant="contained"
color="success"
 onClick={addNewStudent}
>Add data</Button>




</div>
        </Base>
    )
}

export default AddStudents