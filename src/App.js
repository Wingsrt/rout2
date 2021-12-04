import Navbar from "./navbar";

import {Switch,Route} from 'react-router-dom';

import { Router, useHistory } from "react-router";

import Hhome from "./componets/home";
import { Component } from "react";
import Contac from "./componets/Contac";

import About from "./componets/About";

function App() {


  
  

  return (
   <>
   <Navbar/>
   

   <Switch>
     <Route   path='/home' component={Hhome}   />
     <Route   path='/about' component={About}   />
     <Route   path='/contac' component={Contac}   />
   </Switch>



    </>
  );
}


export default App




