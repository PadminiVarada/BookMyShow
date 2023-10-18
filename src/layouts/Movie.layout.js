import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.components";

const MovieLayout=(props)=>{
  return(
    <>
    <MovieNavbar />
    {props.children}
    </>

  );
};

export default MovieLayout;
