/*import logo from './logo.png';*/
import './App.css';
import Component3 from './Components';
import Portfolio from './porfolio';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './App.css';


function App() {
  return (
    <>
      <Portfolio />
      <BasicButtons />
    </>
  );
}

function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
    </Stack>
  );
}

export default App;
