import React from "react";
import MovieHero from "../components/MovieHero/Movie.Hero.component";
import { SiBookmyshow } from "react-icons/si";
import CastCardSlider from "../components/CastCarousel/CastCard.component";
import CrewCardSlider from "../components/CrewCarousel/CrewCard.component";



const MoviePage=()=>{
  return(
    <>

   <MovieHero />

    <div className="my-12 md:ml-16 lg:ml-64 px-4 lg:w-1/2 container">

       <div className="flex flex-col items-start gap-3">
         <h2 className="text-grey-800 font-bold text-2xl">About the Movie</h2>
         <p>Brace yourself for an extraordinary tale of rebellion filled with power-packed action. </p>
       </div>

       <div className="my-8">
        <hr />
       </div>

      <div className="flex flex-col items-start gap-3">
        <h2 className="text-grey-800 font-bold text-2xl">Applicable Offers </h2>
        <div className="flex items-start gap-2 bg-yellow-100 border-2 border-yellow-400 border-dashed p-2 w-96 rounded-md ">
           <div className="w-8 h-8">
            <SiBookmyshow className="w-full h-full" color="red" />
            </div>
            <div className="flex flex-col items-start">
           <h3 className="text-grey-900 text-lg"> Filmy Pass </h3>
           <p className="text-grey-600 text-sm"> Get rs 75* off on 3 movies you buy/rent on stram.Buy Filmy Pass @99 </p>
           </div>
         </div>
      </div>

        <div className="container px-4 mt-5 -ml-3 ">
          <h1 className="text-2xl font-bold text-grey-800">
            Cast
          </h1>
           <CastCardSlider />
         </div>

         <div className="my-8">
          <hr />
         </div>

         <div className="container mt-5">
           <h1 className="text-2xl font-bold text-grey-800">
             Crew
           </h1>
            <CrewCardSlider />
          </div>

          <div className="my-8">
           <hr />
          </div>

    </div>
    </>
  );
};

export default MoviePage;
