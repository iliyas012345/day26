import { Button, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import Base from "../Base/Base";

const EditStudent =({student,setStudent})=>{
    const {id}=useParams()
    const history=useHistory()
    const[editId,setEditId]=useState("")
    const edit=student[id]
 const[idx,setIdx]=useState("")
const[name,setName]=useState("")
const[school,setSchool]=useState("")
const[gender,setGender]=useState("")
const[experience,setExperience]=useState("")



useEffect(() =>{
    setEditId(edit.id)
    setIdx(edit.id)
    setName(edit.name)
    setSchool(edit.school)
    setGender(edit.gender)
    setExperience(edit.yearsOfExperience)

    

},[])






const updateStudentData =(idx) =>{
    const editStudentIndex =student.findIndex((stud)=> stud.id ===editId)
    
    const updateobj ={
      id,
      name,
      school,
      gender,
      yearsOfExperience:experience
    
    }
    student[editStudentIndex] =updateobj
    setStudent([...student])
    setIdx("")
    setName("")
    setSchool("")
    setGender("")
    setExperience("")
    history.push("/students")
    
    }
    return(
        <Base
        title="Edit the Student"
        desrciption="you can a student data here"
        
        >
            <div className='input'>

<TextField
 fullWidth label="Enter the Id" 
 onChange={(event)=>setIdx(event.target.value)}
 value={idx}
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
color="secondary"
onClick={updateStudentData}
 >update</Button>




</div>
        </Base>
    )
}
export default EditStudent