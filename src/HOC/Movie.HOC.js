import React from "react";
import { Routes,Route } from "react-router-dom";

import MovieLayout from "../layouts/Movie.layout";

const MovieHOC=({Component, ...rest})=>{
  return(
   <Routes>
    <Route
       {...rest}
       Component={(props)=>(
         <MovieLayout>
          <Component {...props}/>
          </MovieLayout>
       )}
       />
      </Routes>
  );
}

export default MovieHOC;
