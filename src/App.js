import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage/Home/Home';
import Navbar from './Components/Sheared/Header/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        
      </Routes>
   
    </div>
  );
}

export default App;
