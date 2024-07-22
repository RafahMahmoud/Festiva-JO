import { BrowserRouter, Routes, Route } from "react-router-dom";
import Logout from "./pages/Logout";
import Home from "./pages/Home";
import LogIn from "./pages/LogIn";
import SignUp from "./pages/SignUp";
import ContactUs from "./pages/ContactUs";
import OurStory from "./pages/OurStory";
import Profile from "./pages/Profile";
import Catalog from "./pages/Catalog";
import Admin from "./pages/Admin";
import Details from "./pages/Details";
// import Footer from "./components/Footer";
// import NavBar from "./components/NavBar";
// import { useState } from "react";
import CheckOut from "./pages/checkout";
import BookingConfirmed from "./pages/Booking";
import LogInAdmin from "./pages/LoginAdmin";

function App() {
 
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="LogIn" element={<LogIn />} />
          <Route path="Logout" element={<Logout />} />
          <Route path="ContactUs" element={<ContactUs />} />
          <Route path="OurStory" element={<OurStory />} />
          <Route path="Profile" element={<Profile />} />
          <Route path="Catalog" element={<Catalog />} />
          <Route path="Admin" element={<Admin />} />
          <Route path="Booking" element={<BookingConfirmed />} />
          {/* <Route path="Details/:id" element={<Details />} /> */}
          <Route path="checkout" element={<CheckOut />} />
          <Route path="LogInAdmin" element={<LogInAdmin/>} />
          <Route path="/details/:eventId" element={<Details />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
