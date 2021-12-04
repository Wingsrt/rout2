import { useState } from "react";
import Button, { GlobalStyle } from "./componets/body";

import {createContext,useContext} from 'react'

import Tton from "./button";



const Mood=createContext()


function App() {


  const [color,setcolor]=useState('black')
  function toogle(){

    if(color=="black"){

      setcolor("white")
    }else{
      setcolor('black')
    }


  }


  return (
   <>
   <Mood.Provider value={color}>

     <div >
    <Button onClick={toogle} them={color} > clcik</Button>
    </div>
   <Tton/>
   </Mood.Provider>

    </>
  );
}


export default App

export {Mood}


