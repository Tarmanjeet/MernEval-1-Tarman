import  axios  from 'axios';
import React, { useState } from 'react'

export default function Signin(){
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit=()=>{
        const apiObj={
            email:email,
            password:password
        }
        axios({
            method:"POST",
            url:"",
            data: apiObj
        })
        }

  return (
    <div>
        <input type='email' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
        <input type='password' value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={()=>{handleSubmit()}} >Login</button>
    </div>
  )
}
