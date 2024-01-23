import './App.css';
import './portfolio/bc4150d023d3255136db671d61ac93f2/a1b01e734b573fca08eb1a65e6df9a38.css';
import {Portfolio} from './porfolio';
import {BasicButtons} from './porfolio';
import TransitionGif from './portfolio/Media/Images/Fast_transition.gif';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  setTimeout(()=>{
    document.querySelector("body").style.backgroundImage={TransitionGif}

  },1993)
  return (
    <>
    {/* <BrowserRouter>
            <Routes>
                <Route path="/home" element={<HomePage />} />
                <Route path="/ben-portfolio" element={<BenPortfolio />} />
                <Route path="/randall-portfolio" element={<RandallPortfolio />} />
                <Route path="/jessica-portfolio" element={<JessicaPortfolio />} />
                <Route path="/brian-portfolio" element={<BrianPortfolio />} />
            </Routes>
        </BrowserRouter> */}
      <Portfolio />
      <BasicButtons />
    </>
  );
}

export default App;
