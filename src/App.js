import './App.css';
import { BrowserRouter,Route,Routes } from "react-router-dom";

//axios
import axios from "axios";

//HOC
import DefaultHOC from "./HOC/Default.HOC";
import MovieHOC from "./HOC/Movie.HOC";

//pages
import HomePage from "./pages/HomePage.component";
import MoviePage from "./pages/Movie.page.js";
import Plays from "./pages/Plays.page.js"

//css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//axios default settings
axios.defaults.baseURL="https://api.themoviedb.org/3";
axios.defaults.params={};
axios.defaults.params["api_key"] = process.env.REACT_APP_API_KEY;

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
