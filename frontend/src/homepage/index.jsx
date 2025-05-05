import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Homepage(){

  const[data, setData]=useState();

  useEffect(()=>{
      axios({
        method:"GET",
        url:""
      }).then((res)=>{
        console.log(res,"response");
        setData(res.data.data);
      })
    }, []
      )

  return (
    <div>
    </div>
  )
}
