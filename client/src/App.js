import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar";
import RecordList from "./components/recordList";
import Layout from "./components/layout";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import LandingPage from "./components/LandingPage";
import Profile from "./components/profile"; 

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
        <Route path="profile" element={<Profile />} /> {}
      </Route>
    </Routes>
  );
};

export default App;
