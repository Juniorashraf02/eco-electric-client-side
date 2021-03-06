import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './Components/HomePage/Home/Home';
import Navbar from './Components/Sheared/Header/Navbar';
import Purchase from './Components/Sheared/Purchase/Purchase';
import NotFound from './Components/NotFound/NotFound';
import Signup from './Components/Authentication/Signup/Signup';
import Login from './Components/Authentication/Login/Login';
import RequireAuth from './Components/Authentication/RequireAuth/RequireAuth';
import Dashboard from './Components/Dashboard/Dashboard';
import MyOrders from './Components/Dashboard/MyOrders/MyOrders';
import AddAReview from './Components/Dashboard/AddAReview/AddAReview';
import Payment from './Components/Dashboard/Payment/Payment';
import Reviews from './Components/Reviews/Reviews';
import Myprofile from './Components/Myprofile/Myprofile';
import Blogs from './Components/Blogs/Blogs';
import Portfolio from './Components/Portfolio/Portfolio';
import Users from './Components/Dashboard/Users/Users';
import AddProducts from './Components/Dashboard/AddProducts/AddProducts';
import ManageProducts from './Components/Dashboard/ManageProducts/ManageProducts';
import ManageOrders from './Components/Dashboard/ManageOrders/ManageOrders';
import Profile from './Components/Dashboard/Profile/Profile';
import AllTool from './Components/HomePage/Tools/AllTool';
import Contact from './Components/Contact/Contact';
import About from './Components/About/About';
// import Direction from './Components/Contact/Direction';


function App() {
  return (
    <div className="App overflow-x-hidden">
      <Navbar></Navbar>

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        }></Route>

        <Route path="/dashboard" element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path="myorders" element={<MyOrders />}></Route>
          <Route path="payment/:id" element={<Payment />}></Route>
          <Route path="myreviews" element={<AddAReview />}></Route>
          <Route path="users" element={<Users />}></Route>
          <Route path="addproduct" element={<AddProducts />}></Route>
          <Route path="manageProduct" element={<ManageProducts />}></Route>
          <Route path="manageorders" element={<ManageOrders />}></Route>
          <Route path="myprofile" element={<Profile />}></Route>
        </Route>

        <Route path="/alltool" element={<AllTool />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<About />}></Route>
        {/* <Route path="/contact" element={<Direction />}></Route> */}
        <Route path="/myprofile" element={<Myprofile />}></Route>
        <Route path="/portfolio" element={<Portfolio />}></Route>
        <Route path="/reviews" element={<Reviews />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>

    </div>
  );
}

export default App;
