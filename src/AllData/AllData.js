import React, { createContext } from 'react'
import react, { useEffect, useState } from "react";
import axios from 'axios';
const apiValue=createContext();

function AllData({children}) {


const [text,setText]=useState([]);
useEffect(()=>{

axios.get("js/api.json")
.then((element)=>{
    setText(element.data.products)
})


},[]
)
  return (
    <apiValue.Provider value={text}>
        
        {children}
        
        </apiValue.Provider>
  )
}

export {AllData,apiValue};