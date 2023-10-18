import React from "react";
import Navbar from "../components/Navbar/navbar.components";
import HeroCarousal from "../components/HeroCarousal/HeroCarousal.components"
import { Routes } from "react-router-dom";


const DefaultLayout=(props)=>{
  return(
    <>
    <Navbar />
    <HeroCarousal />
    {props.children}
    </>

  );
};

export default DefaultLayout;
