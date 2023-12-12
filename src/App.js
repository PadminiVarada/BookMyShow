import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";

import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

import HomePage from "./pages/HomePage.component";
import MoviePage from "./pages/Movie.page.js";
import Plays from "./pages/Plays.page.js"


import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function App() {
  return (
     <>
      <DefaultHOC path="/" exact Component={HomePage}/>
      <MovieHOC path="/movie/:id" exact Component={MoviePage}/>
      <DefaultHOC path="/plays/:id" exact Component={Plays}/>
     </>
  );
}

export default App;
