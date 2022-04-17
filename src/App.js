import Navbar from "./components/Navbar";
import GlobalStyle from "./GlobalStyles";
import Hero from "./components/Hero";
import {SliderData} from './Data/SliderData';
import DropDown from "./components/DropDown";
import React, {useState} from 'react';



function App() {
  const [isOpen, setisOpen] = useState(false);

  const toggle =() =>{
    setisOpen(!isOpen)
  }

  return (
    <div className="App">
      <GlobalStyle/>
    <Navbar toggle={toggle}/>
    <DropDown isOpen={isOpen} toggle = {toggle}/>
    <Hero slides={SliderData}/>
    </div>
  );
}

export default App;
