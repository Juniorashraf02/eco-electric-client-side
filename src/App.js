import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage/Home/Home';
import Navbar from './Components/Sheared/Header/Navbar';
import Purchase from './Components/Sheared/Purchase/Purchase';
import NotFound from './Components/NotFound/NotFound';
import Signup from './Components/Authentication/Signup/Signup';
import Login from './Components/Authentication/Login/Login';
import RequireAuth from './Components/Authentication/RequireAuth/RequireAuth';


function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar></Navbar>
      
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase/>
          </RequireAuth>
        }></Route>
        <Route path="/signup" element={<Signup/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
   
    </div>
  );
}

export default App;
