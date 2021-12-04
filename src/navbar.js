
import React from 'react'

import { useHistory } from 'react-router'

function Navbar() {

    const d=useHistory()
    return (
        <div>
            <button onClick={()=>{d.push('/about')}}  >ABOUT</button>
            <button onClick={()=>{d.push('/contac')}}>CONTAC</button>
            <button onClick={()=>{d.push('/home')}}>HOME</button>
            
            
        </div>
    )
}

export default Navbar
