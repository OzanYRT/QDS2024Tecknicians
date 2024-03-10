import React from "react";
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 // We import all the components we need in our app
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Layout from "./components/layout";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Page1 from "./components/page1";
import Page2 from "./components/page2";

 const App = () => {
  // !!! DEFINE A HOME ROUTE WHERE USERS CAN SELECT LOGIN OR REGISTER
 return (
     <Routes>
       <Route path="/" element={<Layout />} >
         <Route index element={<Register />} />
         <Route path="record" element={<RecordList />} />
         <Route path="login" element={<Login />} />
           <Route path="home" element={<Home />} />
           <Route path="page1" element={<Page1 />} />
           <Route path="page2" element={<Page2 />} />
        </Route>
     </Routes>
 );
};
export default App;