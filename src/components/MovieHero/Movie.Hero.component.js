import react from "react";
import { FaThumbsUp } from "react-icons/fa"
import { BsShare } from "react-icons/bs"
import LaunchRazorPay from "../../config/RazorPay.config.js";

const MovieHero=()=>{
  return(
   <>
   <div className="md:hidden">
    <img
    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg"
    alt="poster"
    />
   </div>


   <div className ="hidden md:block lg:hidden">
   <img
        src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg"
        alt="poster"
      />
   </div>



<div className=" relative hidden lg:block w-full flex flex-row" style={{height: "30rem" }}>

  <div className="absolute w-full h-full z-10"
      style={{ backgroundImage:"linear-gradient(90deg, #1A1A1A 24.97%, #1A1A1A 38.3%,rgba(26, 26, 26, 0.0409746) 97.47%, #1A1A1A 100%)"}}

    />


     <div className="absolute z-30 w-full h-96 left-64 flex flex-row">

       <div className="absolute z-40 w-64 h-full top-16 flex">
     <img
       src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg"
       alt="poster"
       className="w-full h-full rounded-xl "
       />
       </div>

       <div className="absolute z-40 w-68 h-80 top-32 left-80">
      <h1 className="text-white text-4xl font-bold"> Salaar: Cease Fire - Part 1 </h1>
      <section className="w-full h-44 mt-4">

       <div className="w-full h-10 flex flex-row m-auto pt-2 ">
        <div className="text-2xl text-white flex">
         <span className="pt-1"><FaThumbsUp color="green" size={22} /></span>
         <span className=" px-2">429.5K </span>
        </div>
        <div className="text-s text-white flex pt-1 pl-2">
         <span> are interested </span>
        </div>
      </div>

      <div className="w-58 h-18 mt-4 text-white flex flex-row border border-white rounded-lg">
       <div className="w-30 h-full m-3">
         <h1 className="font-bold">Releasing on 22 Dec, 2023</h1>
         <h6>Mark interested to know when bookings open</h6>
       </div>
       <div className="w-28 h-full m-3">
          <button className="text-black bg-white text-sm px-2 py-3">I'm interested</button>
       </div>
    </div>

    </section>

    <div className="w-full h-8 flex flex-row gap-3 -mt-6">
      <div className="w-8 h-10 text-black-800 bg-white py-2 px-1">
         <a href="#" className="no-underline hover:underline">2D</a>
      </div>
      <div className="w-58 h-10 text-black-800 bg-white px-1 py-2">
         <a href="#" className="ml-1 no-underline hover:underline">Telugu,</a>
         <a href="#" className="no-underline hover:underline">Tamil,</a>
         <a href="#" className="no-underline hover:underline">Kannada,</a>
         <a href="#" className="no-underline hover:underline">Hindi,</a>
         <a href="#" className="mr-1 no-underline hover:underline">Malayalam</a>
      </div>
    </div>

    <div className="w-full h-6 text-white mt-4 flex flex-row">
      <h4 className="no-underline hover:underline">Action,</h4>
      <h4 className="no-underline hover:underline">Thriller</h4>
    </div>

    <div className="w-48 h-10 m-3 ml-0 ">
     <button onClick={LaunchRazorPay} className="w-full h-full text-white font-bold py-2 bg-red-500 rounded-md">Book tickets</button>
    </div>
  </div>

      <div className="absolute z-40 w-28 h-full top-20 right-80 flex flex-row ">
      <div className="w-10 h-12 px-2 py-2 bg-black opacity-60 ">
       <BsShare color="white" size={28} />
      </div>
      <div className="w-16 h-12 text-white px-2 py-2 bg-black opacity-60">
       <h2> Share </h2>
      </div>
    </div>

  </div>

   <img
    src="https://assets-in.bmscdn.com/iedb/movies/images/mobile/listing/xxlarge/salaar-cease-fire--part-1-et00301886-1702971289.jpg"
    alt="poster"
    className="w-full h-full"
   />

 </div>


   </>
 );
};

export default MovieHero;
