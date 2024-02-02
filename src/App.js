import React from 'react';
import './App.css';
import './portfolio/bc4150d023d3255136db671d61ac93f2/a1b01e734b573fca08eb1a65e6df9a38.css';
import {Portfolio} from './porfolio';
import {HappyButton} from './porfolio';
import TransitionGif from './portfolio/Media/Images/Fast_transition.gif';


function App() {
  setTimeout(()=>{
    document.querySelector("body").style.backgroundImage={TransitionGif}

  },1993)
  return (
    <>
    
      <Portfolio />
      <HappyButton />
    </>
  );
}

export default App;
