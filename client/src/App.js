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
import LandingPage from "./components/LandingPage";
import Profile from "./components/profile";
import Attending from "./components/attending";
import LogoutButton from "./components/logout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        {}
        <Route index element={<LandingPage />} />
        <Route path="record" element={<RecordList />} />
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="home" element={<Home />} />
        <Route path="profile" element={<Profile />} />
          <Route path="page1" element={<Page1 />} />
          <Route path="page2" element={<Page2 />} />
          <Route path="attending" element={<Attending />} />
          <Route path="logout" element={<LogoutButton />} />
      </Route>
    </Routes>
  );
};

export default App;
