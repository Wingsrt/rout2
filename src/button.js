import React from 'react'
import {createContext,useContext} from 'react'
import { useState } from 'react'
import { Mood } from './App'

import Button, { GlobalStyle } from './componets/body'



function Tton() {

    const c=useContext(Mood)


  
    return (
        <>
          <GlobalStyle them={c}/>
      
     
            
        </>
    )
}

export default Tton


