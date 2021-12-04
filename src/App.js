import { useState } from "react";
import Button, { GlobalStyle } from "./componets/body";

import {createContext,useContext} from 'react'

import Tton from "./button";



const Mood=createContext()


function App() {


  const [color,setcolor]=useState({"dark":"black","light":"white"})

  const [a,seta]=useState(0)

  
  function toogle(){

    a==0?seta(1):seta(0)

  }

  console.log(color.dark)


  return (
   <>
   <Mood.Provider value={color.light}>

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


