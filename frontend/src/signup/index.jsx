import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Signup(){
    const navigate=useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState(0);

    const handleSubmit=()=>{
        const apiObj={
            email:email,
            password:password,
            name:name,
            phone:phone
        }
        axios({
            method:"POST",
            url:"",
            data:apiObj
        }).then((res)=>{
            navigate('/signin');
        })
    }

    return (
        <div>
            <input type='text' value={name} placeholder='Name' onChange={(e)=>setName(e.target.value)} />
            <input type='email' value={email} placeholder='Email' onChange={(e)=>setEmail(e.target.value)} />
            <input type='password' value={password} placeholder='Password' onChange={(e)=>setPassword(e.target.value)} />
            <input type='number' value={phone} placeholder='Phone Number' onChange={(e)=>setPhone(e.target.value)}/>
            <button onClick={()=>{handleSubmit()}} >Login</button>
        </div>
      )
}
