import './App.css';
import {Portfolio} from './porfolio';
import {BasicButtons} from './porfolio';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
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
